// array of questions for user
const questions = [

];


const inquirer = require('inquirer');
const fs = require('fs');

// function is adding data to readme
function writeReadme(fileName, readmeData) {
    fs.writeFile("index.md", readmeData, function (err) {
        if (err) {
           return console.log(err)
        }
        console.log("Added ...")
    })
}


inquirer.prompt([
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
// //Description
//     {type: 'input',
//     message: "What is your Project Description?",
//     name: 'description',
//     validate: description => {
//         if(description.length < 10){
//             return "Description is too short.";
//         }
//         else{
//             // all validation checks passed
//             return true;
//         }
//     }
// },
// //Table of Contents
//     {type: 'input',
//     message: "What is the Table of Contents?",
//     name: 'conttable',
//     validate: conttable => {
//         if(conttable.length < 15){
//             return "Table of Contents is too short.";
//         }
//         else{
//             // all validation checks passed
//             return true;
//         }
//     }
// },
// //Installation
//     {type: 'input',
//     message: "What are the steps for Installation?",
//     name: 'installation',
//     validate: installation => {
//         if(installation.length < 5){
//             return "Installation steps are required.";
//         }
//         else{
//             // all validation checks passed
//             return true;
//         }
//     }
// },
// //Usage
//     {type: 'input',
//     message: "What is the Usage description?",
//     name: 'usage',
//     validate: usage => {
//         if(usage.length < 10){
//             return "Usage is too short.";
//         }
//         else{
//             // all validation checks passed
//             return true;
//         }
//     }
// },
// //License
//     {type: 'input',
//     message: "What is the License?",
//     name: 'license',
//     validate: license => {
//          if(license.length < 3){
//              return "License required.";
//     }
//     else{
//         // all validation checks passed
//         return true;
//     }
// }
// },
// //Contributing
//     {type: 'input',
//     message: "Who are the contributors (github usernames)?",
//     name: 'contributor',
//     validate: contributor => {
//          if(contributor.length < 3){
//              return "Contributor(s) required.";
//     }
//     else{
//         // all validation checks passed
//         return true;
//     }
// }
// },
// //Tests
// //optional
//     {type: 'input',
//     message: "What tests are going to be run?",
//     name: 'test',

// },
// //Questions 
// //optional
// {type: 'input',
// message: "Any Questions?",
// name: 'question',

// }


]).then( response => {
    console.log(response.title);
    // function to write README file
    let readmeData = "";
    readmeData += "# Title"
    readmeData += "\n";
    readmeData += response.title; // data under heading
    //  fs.writeFile('index.md', readmeData, 'utf8', err => {
    //     if(err) return console.log("error");
        
    // });

    writeReadme(readmeData);
});




// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
