const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.role = "Manager";
        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;