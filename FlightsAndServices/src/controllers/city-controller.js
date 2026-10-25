//controller will interact with service which will interact with repository which will interact with model which will interact with database
//when we call app.get("/city",(req,res)=>{})
    //in this whole sentence aboe only (req,res)=>{}) is controller rest is middleware
const {CityService}= require('../services/index');
const cityservice=new CityService();

const create= async(req,res)=>{
    try{
        const city= await cityservice.createCity(req.body);
        res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({//status lene ka tareekaa baad me sahi karenge
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
    }
}
const destroy= async(req,res)=>{
    try{//delete -> /city/:id
        const response=await cityservice.deleteCity( {cityId: Number(req.params.id)});//bina is format me likhe api nhi chl rhi
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted the city",
            err:{},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete the city",
            err:error
        })
    }

}
const update= async(req,res)=>{
    try{
        const city=await cityservice.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully updated the city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update the given city",
            err:error,
            
        })

    }

}
const get= async(req,res)=>{//get - /city/:id  id is in parama
    try{
        const cityName = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data:cityName,
            success:true,
            message:"successfully fetched the city",
            err:{},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get the city",
            err:error
        })
    }

}
module.exports={
    create,
    destroy,
    get,
    update
}