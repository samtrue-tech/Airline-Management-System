const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig.js');
const setupAndStartServer=async()=>{
    const app=express();
    const port=PORT;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
};