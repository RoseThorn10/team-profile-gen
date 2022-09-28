const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const questions = require('./questions');
const { createHead, createCard, createFooter } = require('./createHTML');

function createManager() {
    createHead();

    inquirer.prompt(questions('manager')).then((answers) => {
        let managerName = answers.name;
        let managerId = answers.id;
        let managerEmail = answers.email;
        let managerOfficeNumber = answers.officeNum;

        let managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

        createCard(managerObj);
        nextSteps();
    }).catch(err => {
        console.error(err);
    })
}

function createEngineer() {
    inquirer.prompt(questions('engineer')).then((answers) => {
        let engineerName = answers.name;
        let engineerId = answers.id;
        let engineerEmail = answers.email;
        let engineerGithub = answers.github;

        let engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

        createCard(engineerObj);

        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}

function createIntern() {
    inquirer.prompt(questions('intern')).then((answers) => {
        let internName = answers.name;
        let internId = answers.id;
        let internEmail = answers.email;
        let internSchool = answers.school;

        let internObj = new Intern(internName, internId, internEmail, internSchool);

        createCard(internObj);
        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}

function nextSteps() {
    return inquirer.prompt(questions('next')).then(answers => {
        switch (answers.next) {
            case "Add an intern":
                createIntern();
                break;

            case "Add an engineer":
                createEngineer();
                break;

            case "Finish building team":
                createFooter();
                break;
        }

    }).catch(err => {
        console.error(err);
        return;
    })
}

module.exports = { createManager, createIntern, createEngineer, nextSteps };