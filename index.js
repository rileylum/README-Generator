// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'fullName',
        message: 'What is your full name?',
        type: 'input'
    },
    {
        name: 'title',
        message: 'What is the project title?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please provide a description for your project.',
        type: 'input'
    },
    {
        name: 'install',
        message: 'How do you install this project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How do you use this project?',
        type: 'input'
    },
    {
        name: 'contribution',
        message: 'How should people contribute to this project?',
        type: 'input'
    },
    {
        name: 'test',
        message: 'How do you test this project?',
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is your github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What license is this project being released under?',
        type: 'list',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT Licence', 'ISC Licence']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('success')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
