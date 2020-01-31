var inquirer = require("inquirer");
var fs = require('fs');
var generate = require('./output/generateHTML')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//Import Classes
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


const fullTeam = [ ];


 function managerInput() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      }, 
      {
          type: "input",
          message: "Enter your ID",
          name: "ID"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email",
      },
      {
        message: "Enter your Office Number",
        name: "office"
      },
    ]);
  }
function engineerInput(){
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      }, 
      {
          type: "input",
          message: "Enter your ID",
          name: "ID"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email",
      },
      {
        message: "Enter your Github Username:",
        name: "github"
      },
    ]);
  }
  
  function internInput(){
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      }, 
      {
          type: "input",
          message: "Enter your ID",
          name: "ID"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email",
      },
      {
        message: "What School do you go to?",
        name: "school"
      },
    ]);
  }
  


//main function 
function getInput(){
  return inquirer.prompt(
    {
      type: "list",
      name: "role",
      message: "Add Members! (If completed select done!)",
      choices: ["Engineer", "Intern", "All Set!"]
    }, 
    
  ).then(function(res){
    switch(res.role){
      case "Engineer":
        engineerInput()
        .then(function (response){ 
         engineer = new Engineer(
          response.name,
          response.ID,
          response.email,
          response.github
            )
            fullTeam.push(engineer)
           console.log(fullTeam)
           getInput()
        })
      break;  
    }
    switch(res.role){
      case "Intern":
        internInput()
        .then(function (response){ 
         intern = new Intern(
          response.name,
          response.ID,
          response.email,
          response.school
            )
            fullTeam.push(intern)
           console.log(fullTeam)
           getInput()
        })
      break;  
    }
    switch(res.role){
      case "All Set!":
        const html = generate(fullTeam);
        writeFileAsync("index.html", html);
        console.log("succsess")
      break;  
    }

  })


}


//function calls//

  managerInput()
  .then(function(response){
    manager = new Manager (
     response.name,
     response.ID,
     response.email,
     response.office,
    );

    fullTeam.push(manager)
    getInput()
  })

