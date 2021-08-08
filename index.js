const inquirer = require("inquirer");
const fs = require("fs");
const  Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { inherits } = require("util");



init();


function init(){

    header();
    TeamMembers();



}

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
        name: "officenumber", 
        },
        
    ])

    .then(function({name,id,email,officenumber}) {     
         let Manadata=new Manager(name,id,email,officenumber);                         
         generateHTML(Manadata);
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
                 let Engdata=new Engineer(name,id,email,gitHub);
                 generateHTML(Engdata);
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
                  generateHTML(Intdata);
                  Menu();
                });
           ///////////////////////////////////////////////////////

                    
                }
                       
                
                   else  {      
                     console.log("*******  All the members are completed ******** ");
                     footer(); 
                   }
                   })
                   
           }////////////////////////////////////end Menu
        })

   
      
    }


function header(){

  const head=` <DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="./style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
         <title>Team-Profile-Generator</title>
  
  </head>
         <nav class="navbar navbar text-white bg-secondary mb-3">
          <div class="container-fluid ">
            <span class="navbar-text h1 text-center" >
              Team Profile Generator
            </span>
          </div>
        </nav>
      <br>
        <br>
  `
  fs.writeFile("./dist/index.html",head,function(err){
    
        if(err)
        console.log("something is wrong");


  });




}








    function generateHTML(memberdata){
       let datainfo='';
        return new Promise(function(resolve,reject){

            const name=memberdata.getName();
            const id=memberdata.getId();
            const email=memberdata.getEmail();
            const role=memberdata.getRole();

  
     ///////////////////////// card   Manager///////////////////////////////////////////////////////////
     
           if(role==='Manager'){
            const officenumber=memberdata.getofficeNumber();
     
     datainfo=`
     <div class="container">
     <div class="row">
       <div class="col-sm">
     
         <div class="card text-white bg-warning mb-3" style="width: 18rem;">
             <img src="./img/woman3.png"  class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">Manager</h5>
               <p class="card-text">${name}</p>
             </div>
             <ul class="list-group list-group-flush">
               <li class="list-group-item">ID:${id}</li>
               <li class="list-group-item">Office Number: ${officenumber}</li>
              <li class="list-group-item"><a href="mailto:${email}" class="card-link">email: ${email}</a></li>
             </ul>
             </div>
             </div>
     `
           }
                if(role==="Engineer"){
                  
                    const github=memberdata.getGitHub();
                datainfo=
                    `
                
                        <div class="col-sm">
           


                <div class="card text-white bg-primary mb-3" style="width: 18rem;">
                <img src="./img/pngegg (1).png" width="200px" height="300px" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                  <p class="card-text">${name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                 <li class="list-group-item"><a href="mailto:${email}" class="card-link">email: ${email}</a></li>
                 <li class="list-group-item"><a href="https://github.com/${github}" class="card-link">GitHub:  https://github.com/${github}</a></li>
                </ul>
                </div>
                </div>
                `
               }

           else if(role==="Intern")
              {
                const school=memberdata.getSchool();

                datainfo=`

                <div class="col-sm">

                <div class="card text-white bg-danger mb-3" style="width: 18rem;">
                <img src="./img/w2.png"  class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Intern</h5>
                  <p class="card-text">${name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">School: ${school}</li>
                 <li class="list-group-item"><a href="mailto:${email}" class="card-link">email: ${email}</a></li>
                </ul>
               </div>
               </div>

       
                `
           
            
                     
            }
            console.log("HTML generated");


          fs.appendFile("./dist/index.html",datainfo,function(err){
              
               if(err){
                 return reject();

              };
              return resolve();
          })           

        })

    }

   function footer(){
     const foot=`
     
     </div>
     </div>
     </html>
     
     `
    fs.appendFile("./dist/index.html",foot,function(err){

        if(err)
         console.log("something is wrong");
    })
     
   
   }