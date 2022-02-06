// node modules
const inquirer = require('inquirer');
const fs = require('fs');

// array pf questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'project-name',
        message: 'What is your project\'s name?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description about your project',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['The MIT License', 'The GPL License' , 'Apache License', 'GNU License', 'N/A'],
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'run',
        message: 'What command should be run to run tests?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'about',
        message: 'What does the user need to know about using the repo?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
 ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
