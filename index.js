const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

const questions = [

//github repo 
{type: 'input',
message: "What is your Github username?",
name: 'username',
validate: username => {
    if(username.length < 5){
        return "Username is too short.";
    }
    else{
        // all validation checks passed
        return true;
    }
}
},
//title 
    {type: 'input',
    message: "What is the Title of your Project?",
    name: 'title',
    validate: title => {
        if(title.length < 5){
            return "Title is too short.";
        }
        else{
            // all validation checks passed
            return true;
        }
    }
},
//Description
    {type: 'input',
    message: "What is your Project Description?",
    name: 'description',
    validate: description => {
        if(description.length < 10){
            return "Description is too short.";
        }
        else{
            // all validation checks passed
            return true;
        }
    }
},
//Installation
    {type: 'input',
    message: "What are the steps for Installation?",
    name: 'installation',
    validate: installation => {
        if(installation.length < 5){
            return "Installation steps are required.";
        }
        else{
            // all validation checks passed
            return true;
        }
    }
},
//Usage
    {type: 'input',
    message: "What is the Usage description?",
    name: 'usage',
    validate: usage => {
        if(usage.length < 10){
            return "Usage is too short.";
        }
        else{
            // all validation checks passed
            return true;
        }
    }
},
//License
    {type: 'input',
    message: "What is the License?",
    name: 'license',
    validate: license => {
         if(license.length < 3){
             return "License required.";
    }
    else{
        // all validation checks passed
        return true;
    }
}
},
//Contributing
    {type: 'input',
    message: "Who are the contributors (github usernames)?",
    name: 'contributor',
    validate: contributor => {
         if(contributor.length < 3){
             return "Contributor(s) required.";
    }
    else{
        // all validation checks passed
        return true;
    }
}
},
//Tests
//optional
    {type: 'input',
    message: "What tests are going to be run?",
    name: 'test',

},
//Questions 
{type: 'input',
message: "What is your email address?",
name: 'email',

}
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Readme is being created..");
        writeToFile("index.md", generateMarkdown({...response}))

    });
} 

// function call to initialize program
init();
