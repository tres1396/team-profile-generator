const Employee = require("./employee"); 

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.role = "Manager";
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;