const fs = require('fs');
const {jest} = require('jest');
const inq = require('inquirer');
const generateEmployee = require('./src/Employee');
function input() {
    inq.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name",
            validate: nameInput => {
                if (nameInput) {
                    reutrn
                    true;
                } else if (!nameInput || nameInput.type !== String){
                    conosle.log("Enter a valid name");
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "Enter your employee ID",
            validate: idInput => {
                if (idInput || Number(idInput)) {
                    return true;
                } else {
                    console.log("You need to provide a license for your project!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log("You need to provide a license for your project!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
    ]);
}
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data,
        (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}
function init() {
    input().then(data =>
        { writeToFile("README", generateEmployee(data))});
}
