const express       =   require("express");
const ejs           =   require('ejs')
const bodyParser     =  require("body-parser");
const PORT          =   process.env.PORT || 5500;


const app           =   express();
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Routes
const adminRoute           = require("./routes/adminRoute")
const uploadRoute         = require("./routes/uploadRoute")


app.use("/admin", adminRoute);
app.use("/gallery", uploadRoute);

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/service", (req,res)=>{
    res.render("service")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.get("/recieptgenerator", (req,res)=>{
    res.render("recieptgenerator")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.get("/login", (req,res)=>{
    res.render("login")
})

app.listen(PORT, (req,res)=>[
    console.log("Server Running On Port " + PORT)
])
