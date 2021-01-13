const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
;

const employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function switchBoard() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee would you like to add?",
            name: "direction",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        },
        
    ]).then(function (answer){
        switch(answer.direction) {
            case "Manager": 
              // code block
                askManager();
              break;
            case "Engineer":
              // code block
                askEngineer();
              break;
              case "Intern":
              // code block
                askIntern();
              break;
            default:
              // code block
            createHTML();
          }
    })
}

function askManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "title",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }
                return "please enter your name"
            }
        },
        {
            type: "input",
            message: "What is the manager's Id?",
            name: "Id",
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "number",
        },
    ])
        .then(function(answers) {
            const manager = new Manager(answers.title, answers.Id, answers.email, answers.number);
            employees.push(manager);
            switchBoard();
        })

};

function askEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the engineer's Id?",
            name: "Id",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "username",
        },



    ]) .then(function(answers) {
        const engineer = new Engineer(answers.title, answers.Id, answers.email, answers.username);
        employees.push(engineer)
        switchBoard();
    })
};

function askIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the intern's Id?",
            name: "Id",
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "school",
        },



    ]).then(function(answers) {
        const intern = new Intern(answers.title, answers.Id, answers.email, answers.school);
        employees.push(intern)
    switchBoard();
    })
};

function createHTML(){
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8")
}

switchBoard();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
