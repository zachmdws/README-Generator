var fs = require("fs");
var inquirer = require("inquirer");
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
    },
    {
        type: "input",
        message: "Finally, what would you like to name this read me?",
        name: "filename"
    }
])
.then(function(answers){ 
    // console.log(`${answers.username}`+`${answers.title}`);
    const queryURL = `https://api.github.com/users/${answers.username}`
                
                axios.get(queryURL).then(function(res){ 
                    const avatarURL = (res.data.avatar_url);
                    const email = (answers.email);
                    const username = JSON.stringify(answers.username).replace(/['"]+/g, '');
                    const title = JSON.stringify(answers.title).replace(/['"]+/g, '');
                    const description = JSON.stringify(answers.description).replace(/['"]+/g, '');
                    const tableItem = JSON.stringify(answers.table).replace(/['"]+/g, '');
                    const tableItem2 = JSON.stringify(answers.table2).replace(/['"]+/g, '');
                    const installation = JSON.stringify(answers.installation).replace(/['"]+/g, '');
                    const usage = JSON.stringify(answers.usage).replace(/['"]+/g, '');
                    const credits = JSON.stringify(answers.credits).replace(/['"]+/g, '');
                    const license = JSON.stringify(answers.license).replace(/['"]+/g, '');



                    
                    fs.appendFile((answers.filename)+".md", '![GitHub followers](https://img.shields.io/github/followers/'+ username +'?style=social)' + "\n" + "\n"

                    + 'My email: ' + email + "\n" + "\n" + '![Alternative text](' + avatarURL + ")" 

                    + "\n" + "\n" + "# " + title + "\n" + "\n" 

                    + description + "\n" + "\n" + "\n" + "\n"

                    + "# Table of Contents" + "\n" + "\n" + "\n" + "\n" + "- [" + tableItem + "]" 

                    + "(#" + tableItem + ")"  +"\n" + "\n" + "- [" + tableItem2 + "]" + "(#" + tableItem2 + ")" 
                    
                    + "\n" + "\n" + "# Installation" + "\n" + "\n" + installation
                    
                    + "\n" + "\n" + "\n" + "\n" + "# Usage" + "\n" + "\n" + usage 
                    
                    + "\n" + "\n"  + "\n" + "\n" + "# Credits" + "\n" + "\n" + credits + "\n" + "\n" 

                    + "\n" + "\n" + "# License" + "\n" + "\n" + license + "\n" + "\n" 
                    
                    + "## " + tableItem + "\n" + "\n"+ "## " + tableItem2 

                     , function(err) { 
                        if(err) { 
                            throw err;
                        }
                        console.log("Success!");
                    });
                
})})    

