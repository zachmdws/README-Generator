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
        message: "What are the steps necessary to install this project?",
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
                    
                    fs.appendFile('new.md', 'My email:' + email + ' ' + '![Alternative text](' + avatarURL + ")" 
                    + "\n" + "\n" + "# " + JSON.stringify(answers.title) + "\n" + "\n" 
                    + JSON.stringify(answers.description) + "\n" + "\n"
                    + "- ["+ JSON.stringify(answers.table)+"]" + "\n" + "\n"
                    + "- ["+ JSON.stringify(answers.table2)+"]" + "\n" + "\n" , function(err) { 
                        if(err) { 
                            throw err;
                        }
                        console.log("Success!");
                    });
                
})})    






    

            // fs.appendFile("new.md", "# H1" + JSON.stringify(answers.title)
            // + "\n" + "\n" + JSON.stringify(answers.description)
            // + "\n" + "\n" + JSON.stringify(answers.installation)
            // + "\n" + "\n" + JSON.stringify(answers.usage)
            // + "\n" + "\n" + JSON.stringify(answers.credits)
            // + "\n" + "\n" + JSON.stringify(answers.license), function (err) {
            //     if (err) {
            //         return console.log(err);
            //     }



            // .then(function({ username }){ 
            //     const queryURL = `https://api.github.com/users/${username}`
                
            //     axios.get(queryURL).then(function(res){ 
            //         const avatarURL = (res.data.avatar_url);
            //         const email = (res.data.email);
            //     });