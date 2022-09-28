const Employee = require('./Employee');

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

    renderCard() {
        `<div class="card">
        <p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.officeNumber}</p>
        </div>`
    }
}

module.exports = Manager;