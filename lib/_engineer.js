const Employee = require('./_employee');

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
}


module.exports = Engineer;