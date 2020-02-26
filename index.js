var fs = require("fs");
var inquirer = require("inquirer");
var github = require('octonode');
const axios = require("axios");




inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email associated with Github?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a brief description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter in a table of content item that will be needed",
        name: "table"
    },
    {
        type: "input",
        message: "Enter in another table of content item that will be needed",
        name: "table2"
    },
    {
        type: "input",
        message: "Give an explanation as to how to install this project",
        name: "installation"
    },
    {
        type: "input",
        message: "How are we supposed to use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Credit any collaborators or third-party assets here",
        name: "credits"
    },
    {
        type: "input",
        message: "How and to what extent are other developers allowed to use your work?",
        name: "license"
    }
])
.then(function(answers){ 
    // console.log(`${answers.username}`+`${answers.title}`);
    const queryURL = `https://api.github.com/users/${answers.username}`
                
                axios.get(queryURL).then(function(res){ 
                    const avatarURL = (res.data.avatar_url);
                    const email = (answers.email);
                    
                    fs.appendFile('new.md', '![GitHub followers](https://img.shields.io/github/followers/'
                    + JSON.stringify(answers.username).replace(/['"]+/g, '') +'?style=social)' + "\n" + "\n"

                    + 'My email:' + email + "\n" + "\n" + '![Alternative text](' + avatarURL + ")" 

                    + "\n" + "\n" + "# " + JSON.stringify(answers.title).replace(/['"]+/g, '') + "\n" + "\n" 

                    + JSON.stringify(answers.description).replace(/['"]+/g, '') + "\n" + "\n" + "\n" + "\n"

                    + "# Table of Contents" + "\n" + "\n" + "\n" + "\n" + "- [" + JSON.stringify(answers.table).replace(/['"]+/g, '') + "]" 

                    + "(#" + JSON.stringify(answers.table).replace(/['"]+/g, '') + ")"  +"\n" + "\n" + "- [" + JSON.stringify(answers.table2).replace(/['"]+/g, '')

                     + "]" + "(#" + JSON.stringify(answers.table).replace(/['"]+/g, '') + ")" + "\n" + "\n" + "# Installation" + "\n" + "\n" + JSON.stringify(answers.installation).replace(/['"]+/g, '') + "\n" + "\n" 

                    + "\n" + "\n" + "# Usage" + "\n" + "\n" + JSON.stringify(answers.usage).replace(/['"]+/g, '') + "\n" + "\n" 

                    + "\n" + "\n" + "# Credits" + "\n" + "\n" + JSON.stringify(answers.credits).replace(/['"]+/g, '') + "\n" + "\n" 

                    + "\n" + "\n" + "# License" + "\n" + "\n" + JSON.stringify(answers.license).replace(/['"]+/g, '') + "\n" + "\n" 
                    
                    + "## " + JSON.stringify(answers.table).replace(/['"]+/g, '') + "\n" + "\n"+ "## " + JSON.stringify(answers.table2).replace(/['"]+/g, '') 

                     , function(err) { 
                        if(err) { 
                            throw err;
                        }
                        console.log("Success!");
                    });
                
})})    

