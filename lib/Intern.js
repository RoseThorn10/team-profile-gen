const Employee = require('./Employee');

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

    renderCard() {
        `<div class="card">
        <p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.school}</p>
        </div>`
    }
}


module.exports = Intern;