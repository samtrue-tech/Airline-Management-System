// we have to set up express router 
// isse hoga yeh ki baar baar /bird/v1/abc nhi likhna padega yeh khud dekhlega ki /bird ke baad kya aayega aur uske hisaab se route ko handle karega
const express=require('express');
const router=express.Router();
const v1ApiRoutes=require('./v1/index.js');
router.use('/v1',v1ApiRoutes);
module.exports=router;