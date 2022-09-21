const express = require("express")
const cors =  require("cors")
const bodyParser = require("body-parser");
const useRoutes = require("./routes/users")

const app = express();
const port = 5001;

app.use(bodyParser.json())
app.use(cors())

app.use("/",useRoutes)

app.get("/",(req,res)=>res.send("Hello from Express"))
app.get("*",(req,res)=>res.send("Router doesn't exists"))

app.listen(port,()=>console.log("Server is listening port 5001"))


console.log("Hello")