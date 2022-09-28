const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
        return this.github;
    }

    renderCard() {
        `<div class="card">
        <p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.github}</p>
        </div>`
    }
}


module.exports = Engineer;