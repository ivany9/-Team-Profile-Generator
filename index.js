const inquirer = require("inquirer");
const fs = require("fs");
const  Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];


    TeamMembers();


function TeamMembers() {
    inquirer.prompt([
        {

        message: "Enter  manager's name",
        name: "name",
        },
        {
        message: "Enter  manager's  id",
        name: "id",
        },
        {
        message: "Enter  manager's  email",
        name: "email",
        },
        {
        message: "Enter manager's  office number",
        name: "officenumberManager", 
        },
        
    ])

    .then(function({name,id,email,officeNumber}) {     
         let Manadata=new Manager(name,id,email,officeNumber);                         
            const role="Enter";
               Menu();
               function Menu()       {
        inquirer.prompt([
            {            
                    type: "list",
                    message: "add Team Member :",
                    choices: [
                        "Engineer",
                        "Intern",
                       "Finish"
                            ],
                    name: "role"

            }         
        ])
             .then(function({role}){
                  
                  if(role==="Engineer"){    
             /////////////////////////////////////////////////////        
                   console.log("*****Enginner******");
             inquirer.prompt([
                {
        
                message: "Enter  Enginner's name",
                name: "name",
                },
                {
                message: "Enter  Enginner's  id",
                name: "id",
                },
                {
                message: "Enter  Enginner's  email",
                name: "email",
                },
                {
                message: "Enter Enginner's  GitHub Username",
                name: "gitHub", 
                },
                
            ])
        
            .then(function({name,id,email,gitHub}) {     
                 let Engadata=new Engineer(name,id,email,gitHub);
                 Menu();  
            });
           //////////////////////////////////////////////////////////
                      
                  
            }
                  else if(role==="Intern"){
                    console.log("*****Intern******");
/////////////////////////////////////////////////////        
 
             inquirer.prompt([
                {
        
                message: "Enter  Intern's name",
                name: "name",
                },
                {
                message: "Enter  Intern's  id",
                name: "id",
                },
                {
                message: "Enter  Intern's  email",
                name: "email",
                },
                {
                message: "Enter Intern's  School",
                name: "school", 
                },
                
            ])
        
            .then(function({name,id,email,school}) {     
                  let Intdata=new Intern(name,id,email,school);  
                  Menu();
                });
           ///////////////////////////////////////////////////////

                    
                }
                       
                
                   else        
                     console.log("fin de la funcion");
                      

                   })
                   
           }////////////////////////////////////end Menu
        })

}