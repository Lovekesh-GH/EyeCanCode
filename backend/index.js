const express = require('express');
const cors = require("cors");
const {generateFile} = require('./generateFile');
const {executeCpp} = require("./executeCpp");
const {executePy} = require('./executePy');
const {executeC} = require('./executeC');
const { executeJava } = require('./executeJava');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res)=> {

    return res.json({ hello: "world!"});
});

app.post("/run",async(req,res) =>{
    // console.log(req.body);
    const { language = "cpp",code}=req.body;
    console.log(language,code.length);

    if(code === undefined){
        return res.status(400).json({ success: false,error: "Empty Code Body!"});
    }
    try {
    const filepath = await generateFile(language, code);
    let output;
    if(language === "cpp"){
        output = await executeC(filepath);
    }
    else if(language === "c"){
        output = await executeCpp(filepath);
    }
    else if(language == "java"){
        output = await executeJava(filepath);
    }
    else{
        output = await executePy(filepath);
    }
    return res.json({filepath,output});  
}catch (err){
    res.status(500).json({err});
}}
);

app.listen(5000,()=>{
    console.log(`Listening on port 5000!`);
});