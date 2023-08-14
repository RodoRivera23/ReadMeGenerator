// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Give a short Description of your project?",
                name: "description",
            },
            {
                type: "input",
                message: "How do you Install your application?",
                name: "installation",
            },
            {
                type: "input",
                message: "How do you Use your application?",
                name: "usage",
            },
            {
                type: "input",
                message: "How can people Contribute to your project?",
                name: "contributing",
            },
            {
                type: "input",
                message: "How do people can tests your project?",
                name: "tests"
            },
            {
                type: "checkbox",
                message: "What License did you use for this repository?",
                choices: ["MIT License", "GNU Affero General Public License v3.0", "Apache License 2.0", "GNU General Public License 3.0"],
                name: "license",
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your email address where users and contributors can send questions?",
                name: "email"
            },
        ])
        .then((response) => {
            const markdown = generate(response);
            return fs.writeFile('README.md', markdown, (err) => err ? console.error(err) : console.log('README created!'));
        });
}
// Function call to initialize app
init();
