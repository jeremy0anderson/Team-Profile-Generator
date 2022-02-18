const {prompt} = require('inquirer');
const fs = require('fs');
const {jest} = require('jest');
const {generateEmployee, Employee, Manager, Intern, Engineer} = require('./lib/Employee');
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
const menu = {
        type: "list",
        name: "menu",
        message: "Would you like to do next?",
        choices: ["Add an engineer?","Add an intern?","Finish building team?"]
    };
let engineers = [];
let interns = [];
let managers = [];
let employees = [];
function getManager(){
    return prompt(managerInfo).then(answers => {
        managers.push(new Manager(answers.name, answers.id, answers.email, answers.ofice));
        console.log(managers);
        employees.push(managers);
    });
}
function getEngineers(){
   return prompt(engineerInfo).then((answers) => {
        engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    }).then(mainMenu);
}
function getInterns(){
    return prompt(internInfo).then(answers => {
        interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    }).then(mainMenu);
}
function mainMenu(){
    prompt(menu).then((answers) => {
        switch(answers.menu){
            case "Add an engineer":
                return getEngineers();
            case "Add an intern":
                return getInterns();
            case "Finish building team":
                return employees.push(managers, engineers, interns);
        }
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.html`, data,
        (err) => err ? console.error(err) : console.log(`${fileName}.html has been generated.`))
}
function init() {
    input().then(data =>
        { writeToFile("Employees", generateEmployee(data))});
}
let start = () => {
    getManager().then(function(){
        mainMenu();
    });
}
start();