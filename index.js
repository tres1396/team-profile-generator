// requirements
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");

// Array to be filled with team members
let teamMembers = [];

// prompts to build a card for each type of team member

// Manager prompts
function managerCard() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Manager's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Manager's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Manager's office number?",
                name: "office"
            },
        ])

        .then((data) => {
            const name = data.name;
            const email = data.email;
            const id = data.id;
            const office = data.office

            const member = new Manager(name, email, id, office);
            teamMembers.push(member);
            addTeamMember();
        });
}

// intern prompts

function internCard() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Intern's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Intern's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "Where did the intern go to school?",
                name: "school"
            },
        ])

        .then((data) => {
            const name = data.name;
            const email = data.email;
            const id = data.id;
            const school = data.school;

            const member = new Intern(name, email, id, school);
            teamMembers.push(member);
            addTeamMember();
        });
}

// engineer prompts

function engineerCard() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Engineer's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Engineer's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Engineer's Github username?",
                name: "github"
            },
        ])

        .then((data) => {
            const name = data.name;
            const email = data.email;
            const id = data.id;
            const github = data.github;

            const member = new Engineer(name, email, id, github);
            teamMembers.push(member);
            addTeamMember();
        });
}

// This checks if the user wants to add another teammate
function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "checkbox",
                message: "Would you like to add another team member?",
                name: "choice",
                choices: ["Manager", "Intern", "Engineer", "No thank you"],
            }
        ])

        .then(function (data) {
            if (data.choice == "Manager") {
                managerCard();
            }
            if (data.choice == "Intern") {
                internCard();
            }
            if (data.choice == "Engineer") {
                engineerCard();
            }
            if (data.choice == "No thank you") {
                createHTML();
            }
        });
}

// create HTML if all team members have been added

function createHTML() {

    let fullHtml = [];

    const renderHTML =
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <title>Team Generator</title>
    </head>
    <body>
    <div class="page-header">
    <h1>My Team ????</h1>
    </div>
    </body>
    </html>
    `;

    fullHtml.push(renderHTML);
    // iterate through team members to make cards
    for (i = 0; i < teamMembers.length; i++) {
        let addToHTML = ``;

        if (teamMembers[i].role == "Manager") {
            addToHTML += `
            <div class="card bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Role: ${teamMembers[i].role}</div>
      <p>Name: ${teamMembers[i].name}</p>
      <p>Email: <a href="mailto:${teamMembers[i].email}" target="_blank">${teamMembers[i].email}</a></p>
      <p>Id: ${teamMembers[i].id}</p>
      <p>Office Number: ${teamMembers[i].office}</p>
    </div>
    `;
        }

        if (teamMembers[i].role == "Intern") {
            addToHTML += `
        <div class="card bg-warning mb-3" style="max-width: 18rem;">
          <div class="card-header">Role: ${teamMembers[i].role}</div>
            <p>Name: ${teamMembers[i].name}</p>
            <p>Email: <a href="mailto:${teamMembers[i].email}" target="_blank">${teamMembers[i].email}</a></p>
            <p>Id: ${teamMembers[i].id}</p>
            <p>School: ${teamMembers[i].school}</p>
        </div>
        `;
        }

        if (teamMembers[i].role == "Engineer") {
            addToHTML += `
        <div class="card bg-danger mb-3" style="max-width: 18rem;">
          <div class="card-header">Role: ${teamMembers[i].role}</div>
            <p>Name: ${teamMembers[i].name}</p>
            <p>Email: <a href="mailto:${teamMembers[i].email}" target="_blank">${teamMembers[i].email}</a></p>
            <p>Id: ${teamMembers[i].id}</p>
            <p>GitHub: <a href="https://github.com/${teamMembers[i].github}" target="_blank">${teamMembers[i].github}</a></p>
        </div>
            `;
        }
        fullHtml.push(addToHTML);
    };


    const htmlEnding = `
</body>
</html>`;

    fullHtml.push(htmlEnding);

    fs.writeFile("index.html", fullHtml.join(""), (err) =>
    err ? console.log(err) : console.log("Finished!")
    )}

managerCard();
