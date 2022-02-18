//prompt question declaration / module imports.
const inquirer = require('inquirer');
const fs = require('fs');
const Card = require('./src/generateCards');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const managerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter the team manager's name",
    },
    {   type: "input",
        name: "id",
        message: "Enter the team manager's employee ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the team manager's email",
    },
    {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?",
    },
];
const engineerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name",
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email"
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username"
    }
];
const internInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email",
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school",
    }
];
const menu = [
        {
            type: "list",
            name: "main",
            message: "Would you like to do next?",
            choices: ["Add an engineer","Add an intern","Finish building team"]
        }
    ];
let employees = [];
let htmlComponents=''
let fileHead = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Employees</title>
    <link rel="stylesheet" href="./dist/Cards.css"/>
    </head>
    <body>`;
const fileClose = `</body></html>`
//method for generating an HTML file containing tags/elements created based on user input
function generateFile(data) {
    fs.writeFile(`./dist/Employees.html`, data,
        (err) => err ? console.error(err) : console.log(`Employees.html has been generated.`));
}

//prompts the user for a manager's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getManager(){
     inquirer.prompt(managerInfo).then(answers => {
        return employees.push(new Card(new Manager(answers.name, answers.id, answers.email, answers.office)));
    }).then(employees => {return employees.card})
        .then((menu) => mainMenu());
}

//prompts the user for an engineer's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getEngineers(){
   return inquirer.prompt(engineerInfo).then((answers) => {
       return employees.push(new Card(new Engineer(answers.name, answers.id, answers.email, answers.github)));
   }).then(menu => mainMenu());
}

//prompts the user for an intern's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getInterns(){
     return inquirer.prompt(internInfo).then(answers => {
         return employees.push(new Card(new Intern(answers.name, answers.id, answers.email, answers.school)));
    }).then(menu => mainMenu());
}

//prompts the main menu / whether to add an intern, engineer or finish building team.
//selecting finish building team gets the values from the employees array and (eventually, not coded now) writes an HTML file with the card key/value that gets returned.
function mainMenu(){
    return inquirer.prompt(menu).then((answers) => {
        //depending on selection, prompt questions for engineer, intern, or finish building team
        switch(answers.main){
            case "Add an engineer":
                 return getEngineers();
            case "Add an intern":
                 return getInterns();
            case "Finish building team":
                for (let i = 0; i < employees.length; i++) {
                    htmlComponents+=employees[i].card;
                }
                const file = fileHead+=htmlComponents+=fileClose;
                return generateFile(file);
        }
    });
    
}

//creates an empty HTML file (appended results when user gets through prompts)
function start(){
    getManager();
}
start();
