const express = require('express')
const app = express()


const path=require("path")

/* 
const PORT = 3001
app.listen(PORT, () => {
console.log("Servidor corriendo en port",PORT)})
*/
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log("Servidor corriendo en puerto",port)})

console.log("dirname "+__dirname)

//console.log("path.join 1 ->"    + path.join   (__dirname,"/views/index.html"))
//console.log("path.join 2 ->"    + path.join   (__dirname,"views/index.html"))

//console.log("path.resolve 1 ->" + path.resolve(__dirname,"views/index.html"))
//console.log("path.resolve 2 ->" + path.resolve(__dirname,"/views/index.html"))

app.use(express.static("public"));

app.get('/'         , (req, res) => { res.sendFile(path.join(__dirname,"/views/home.html"))})
app.get('/home'     , (req, res) => { res.sendFile(path.join(__dirname,"/views/home.html"))})
app.get('/register' , (req, res) => { res.sendFile(path.join(__dirname,"/views/register.html"))})
app.get('/login'    , (req, res) => { res.sendFile(path.join(__dirname,"/views/login.html"))})