// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of project? (Required)",
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('You must enter your projects name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project and its purpose. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project? (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('We need instructions on how to install your project!');
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmCon",
        message: "Was there any other contributors?",
        default: true
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'please list the other contributors!',
        when: ({ confirmCon }) => confirmCon
    },
    {
        type: "input",
        name: "instructions",
        message: "How do we use your project?"
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Licenses used for the project (Check all that apply)',
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'ISC', 'Not listed'],
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: "input",
        name: "username",
        message: "What is your gitHub username? (Required)",
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter your username');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "repo",
        message: "What is your projects repo name? (Required)",
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter your repo name');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter a valid email address');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};
// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('README.md', generateMarkdown(userInput));
        });
};
// function call to initialize program
init();
