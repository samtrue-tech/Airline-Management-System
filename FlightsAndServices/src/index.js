const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig.js');
const ApiRoutes= require('./routes/index.js');
const setupAndStartServer=async()=>{
    const app=express();
    const port=PORT;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);//ab jab bhi koi link kholega toh /api hua toh iuske through api routes me jaake correctly hoga
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
};
setupAndStartServer();