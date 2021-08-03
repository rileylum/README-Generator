// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the project title?',
        type: 'input'
    },
    {
        name: 'descMotivation',
        message: 'What is the motivation behind the project?',
        type: 'input'
    },
    {
        name: 'descWhy',
        message: 'Why did you build this project?',
        type: 'input'
    },
    {
        name: 'descProblem',
        message: 'What problem does the project solve?',
        type: 'input'
    },
    {
        name: 'descLearn',
        message: 'What did you learn building the project?',
        type: 'input'
    },
    {
        name: 'install',
        message: 'How do you install this project?',
        type: 'input'
    },
    {
        name: 'test',
        message: 'How do you test this project?',
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
        name: 'licencse',
        message: 'What license is this project being released under?',
        type: 'list',
        choices: ['MIT', 'another one']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => console.log(answers));
}

// Function call to initialize app
init();
