const Employee = require('./_employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
}

module.exports = Manager;