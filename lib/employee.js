class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role= "Employee";
    }

    employeeName() {
        return this.name;
    }

    employeeEmail() {
        return this.email;
    }

    employeeId() {
        return this.id;
    }
}

module.exports = Employee;