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

function generateHtml() {
    fs.writeFileSync('../dist/output.html', completeHtml, (err) => {
        if (err) console.error(err);
        console.log("html generated successfully");
    })
}

module.exports = questions;
