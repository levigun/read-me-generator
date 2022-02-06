// created variables
const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = require("./filegenerator");

// array of questions for user to answer
const questions = [
    
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
        name: 'projectName',
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
        name: 'credits',
        message: 'Please add some credits for your project:',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
    }
 ];


// function to write to my readme.md file
inquirer.prompt(questions).then(function(response){
    console.log(response);

    var content = fileGenerator(response);
    console.log(content);
        fs.writeFile("./ReadMe.md", content, function(err){
            if (err) throw err
            console.log("You have succesfully created your ReadMe file!")
        });
});
