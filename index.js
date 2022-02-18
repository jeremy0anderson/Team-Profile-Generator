//prompt question declaration / module imports.
const {prompt} = require('inquirer');
const fs = require('fs');
const Card = require('./src/generateCards');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const managerInfo = [
    {type: "input",
        name: "name",
        message: "Enter the team manager's name"
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
            name: "menu",
            message: "Would you like to do next?",
            choices: ["Add an engineer","Add an intern","Finish building team"]
        }
    ];
let employees = [];

//method for generating an HTML file containing tags/elements created based on user input
function generateFile(data) {
    fs.writeFile(`../dist/Employees.html`, '',
        (err) => err ? console.error(err) : console.log(`employee.html has been generated.`))
}

//prompts the user for a manager's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getManager(){
    return prompt(managerInfo).then(answers => {
        return employees.push(new Card(new Manager(answers.name, answers.id, answers.email, answers.office)));
    }).then(menu => mainMenu());
}

//prompts the user for an engineer's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getEngineers(){
   return prompt(engineerInfo).then((answers) => {
       return employees.push(new Card(new Engineer(answers.name, answers.id, answers.email, answers.github)));
   }).then(menu => mainMenu());
}

//prompts the user for an intern's information and then creates an object identifying the employee's role + the appropriately formatted HTML to add to a file.
function getInterns(){
     return prompt(internInfo).then(answers => {
         return employees.push(new Card(new Intern(answers.name, answers.id, answers.email, answers.school)));
    }).then(menu => mainMenu());
}

function mainMenu(){
    return prompt(menu).then((answers) => {
        switch(answers.menu){
            case "Add an engineer":
                 getEngineers();
                 break;
            case "Add an intern":
                 getInterns();
                 break;
            case "Finish building team":
                 console.log(employees);
                 break;
        }
    });
}

function init() {
    input().then(data =>
        { writeToFile("Employees", generateEmployee(data))});
}
let start = () => {
    generateFile();
    getManager();
}
start();