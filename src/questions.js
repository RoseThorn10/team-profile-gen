// const inquirer = require('inquirer');
// const Manager = require('../lib/manager');
// const Intern = require('../lib/intern')
// const managerHtml = require('./manager_template');
// let completeHtml = "";
// const fs = require('fs');


function questions(type) {
    let managerQues = [{
        type: 'input',
        message: `Please enter manager's name`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Please enter manager's employee ID`,
        name: 'id'
    },
    {
        type: 'email',
        message: `Please enter manager's email address`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Please enter manager's office number`,
        name: 'officeNum'
    }];

    let engineerQues = [{
        type: 'input',
        message: `Please enter engineer's name`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Please enter engineer's employee ID`,
        name: 'id'
    },
    {
        type: 'email',
        message: `Please enter engineer's email address`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Please enter engineer's GitHub username`,
        name: 'github'
    }];

    let internQues = [{
        type: 'input',
        message: `Please enter intern's name`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Please enter intern's employee ID`,
        name: 'id'
    },
    {
        type: 'email',
        message: `Please enter intern's email address`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Please enter intern's school`,
        name: 'school'
    }];

    let nextQuestions = [{
        type: 'list',
        message: `Please select one of the following:`,
        choices: ["Add an intern", "Add an engineer", "Finish building team"],
        name: 'next'
    }];

    let quests;

    switch (type) {
        case 'manager':
            quests = managerQues;
            break;

        case 'intern':
            quests = internQues;
            break;

        case 'engineer':
            quests = engineerQues;
            break;

        case 'next':
            quests = nextQuestions;
            break;
            
        default:
            quests = [];
            break;
    }

    return quests;
}

// function createManager() {
//     inquirer.prompt(managerQues).then((answers) => {
//         let managerName = answers.name;
//         let managerId = answers.id;
//         let managerEmail = answers.id;
//         let managerOfficeNumber = answers.officeNum;

//         let managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
//         console.log(managerObj);
//         // completeHtml += managerHtml(managerObj);
//         nextSteps();
//     }).catch(err => {
//         console.error(err);
//     })
// }

// function createIntern() {
//     inquirer.prompt(internQues).then((answers) => {
//         let internName = answers.name;
//         let internId = answers.id;
//         let internEmail = answers.email;
//         let internSchool = answers.school;

//         let internObj = new Intern(internName, internId, internEmail, internSchool);
//         console.log(internObj);
//         // completeHtml += managerHtml(managerObj);
//         nextSteps();
//     }).catch(err => {
//         console.error(err);
//     })
// }

// function createEngineer() {
//     inquirer.prompt(engineerQues).then((answers) => {
//         let engineerName = answers.name;
//         let engineerId = answers.id;
//         let engineerEmail = answers.email;
//         let engineerGithub = answers.github;

//         let engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
//         console.log(engineerObj);
//         // completeHtml += managerHtml(managerObj);
//         nextSteps();
//     }).catch(err => {
//         console.error(err);
//     })
// }


// function generateHtml() {
//     fs.writeFileSync('../dist/output.html', completeHtml, (err) => {
//         if (err) console.error(err);
//         console.log("html generated successfully");
//     })
// }

module.exports = questions;
