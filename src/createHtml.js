const fs = require('fs');

function createHead() {
    let headerText = `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="description" content="team">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div class="container">
    <div class="row row-cols-3">
    `;

    try {
        fs.writeFileSync('./dist/output.html', headerText);
        console.log('opened file and wrote header');
    } catch (err) {
        console.log("Unable to write header");
        throw err;
    }
}

function createCard(employee) {
    let field1 = '';
    let field2 = '';
    let name = employee.name;
    let id = employee.id;
    let email = employee.email;
    let role = employee.getRole();

    switch (employee.getRole()) {
        case 'Manager':
            field1 = 'Office Num';
            field2 = employee.officeNumber;
            break;

        case 'Engineer':
            field1 = 'Github';
            field2 = employee.github;
            break;

        case 'Intern':
            field1 = 'School';
            field2 = employee.school;
            break;
    }

    let text = `
                <div class="card" style="width: 18rem;">
                <div class="card-body>
                <h3 class="card-title">${name}</h3>
                <h4 class="card-subtitle">${role}</h4>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text">${field1}: ${field2}</p>
                </div>
                </div>
                `;

    try {
        fs.appendFileSync('./dist/output.html', text);
        console.log("Sucessfully wrote card");
     } catch (err) {
        console.log("unable to write file");
        throw err;
    };
    
}

function createFooter() {
    let text = `</div>
    </body>
    </html>`;

    try {
        fs.appendFileSync('./dist/output.html', text);
        console.log("Sucessfully wrote footer");
     } catch (err) {
        console.log("unable to write footer");
        throw err;
    };
}

module.exports = { createHead, createCard, createFooter};