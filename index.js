// requirements
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const Intern = require("./intern");
const Manager = require("./manager");
const Engineer = require("./engineer")

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
    let htmlPage = [];
    
}


// classes
    .then(answers => {
    fs.writeFile('./answers.json', JSON.stringify(answers), () => { });
    console.log(answers);

    const HTML = `<!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
               <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
               <link rel="stylesheet" href="style.css">
               <title>Team Generator</title>
           </head>
           <body>
               <!--Header-->
               <div class="jumbotron container">
                   <h1 class="display-4">My Team ☺</h1>
                 </div>
               
           <!--Card Container-->
               <div class="card-container d-flex flex-row">
                   <div class="card" style="width: 18rem;">
                       <div class="card-body">
                         <h5 class="card-title">${answers.teammember}</h5>
                         <h6 class="card-title">${answers.position}</h6>
                       
                       <ul class="list-group list-group-flush">
                         <li class="list-group-item">Employee ID #</li>
                         <li class="list-group-item">Employee Email</li>
                         <li class="list-group-item">Office #, github, or school</li>
                       </ul>
                       </div>
                     </div>
               </div>
               <script src="script.js"></script>
           </body>
           </html>`


    fs.appendFile("./index.html", HTML, () => { });
});