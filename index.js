// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email adderess?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the project name?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "GPL 3.0", "BSD 3", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responseObj) => {
    writeToFile("readme.md", generateMarkdown({ ...responseObj }));
  });
}

// Function call to initialize app
init();
