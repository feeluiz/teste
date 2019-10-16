const express = require("express")
//const routers = require('./routes')

const server = express()

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(express.json())

server.get("/" , (req,res)=> res.json({'message':'Bem Vindo'}))
            
server.post("/users" , usersController.search)
server.post("/details" , detailsController.getDetails)



server.listen(8080, () =>{console.log("server em execução.")})
