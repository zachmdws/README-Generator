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
    .then(function (answers) {
        // console.log(`${answers.username}`+`${answers.title}`);
        const queryURL = `https://api.github.com/users/${answers.username}`

        axios.get(queryURL).then(function (res) {


    fs.appendFile((answers.filename) + ".md", `![GitHub followers](https://img.shields.io/github/followers/${answers.username}?style=social)

My email: ${answers.email} 

![Alternative text](${res.data.avatar_url})

# ${answers.title}

${answers.description}

# Table of Contents 

- [${answers.table}](#${answers.table})

- [${answers.table2}](#${answers.table2}) 
                    
# Installation 

${answers.installation}
                    
# Usage

${answers.usage}
                    
# Credits

${answers.credits}

# License

${answers.license}
                    
## ${answers.table}

## ${answers.table2}

`, function (err) {
                if (err) {
                    throw err;
                }
                console.log("Success!");
            });

        })
    })

