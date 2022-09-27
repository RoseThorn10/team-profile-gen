const Employee = require('./_employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
        return this.school;
    }
}


module.exports = Intern;