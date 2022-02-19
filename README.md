# Team Profile Generator
  ## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  Read more about MIT License here: https://www.boost.org/LICENSE_1_0.txt
  ## Description
  A Node.js CLI application that prompts a user for employees with different roles. Each role contains a different component that's specific to that role. For example: an intern's informatin won't contain their github repositories, but the engineer's will. User input is gathered, sorted, and pushed into a template html file (different fields = different employee roles).The html file is saved into a directory named /dist and contains lightly styled cards containing the name, id, and email of each employee. The email of the employee that is clicked on will open up the user's default mail application and fill the "to:" field respectively. 
  ## Installation
  This application requires the installation of inquirer and "fs" (file saver). These are installed by opening the terminal in the root directory containing "package.json" and running 'npm install' or just 'npm i'. Once the node modules are installed, to run the application, type: 'node index.js' and you will be prompted with the questions. When you select "finish building team", the application will then stop, and the html file containing each employee's details that were entered will populate in a styled html format.  
  ## Usage
  It can primarily be used as a quick and easy template to creating/managing projects in a team setting. it lists the contact information for the manager, as well as emails for each employee and the data is presented in an easy-to-keep-track-of way. 
  ## Contributors 
  Jeremy Anderson (me)
  ## Tests
  Yes -- inside the test directory there are 4 tests that check whether the constructor for each employee class returns the correct values.
  ## Questions
  ### Contact me at: 
  [jeremy0anderson](https://github.com/jeremy0anderson)  
  projects@jeremyanderson.dev
  ### Video Demo: 
https://github.com/jeremy0anderson/Team-Profile-Generator/blob/main/Team-nodejs-demo2.mov
