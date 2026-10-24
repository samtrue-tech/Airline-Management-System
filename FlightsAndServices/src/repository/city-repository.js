const {City}=require('../models');

class CityRepository{
    async createCity({name}){
        try{
            const cityResponse= await City.create({name});
            return cityResponse;
        }catch(error){
            
            throw {error};
        }}   
     async deleteCity({cityId}){
        try{
            const deleted=await City.destroy({
                where:{ id:cityId}
            });
            return deleted;
        }catch(error){
            console.log("something went wrong at repository layer");
            throw {error};

        }}
     async updateCity({data,cityId}){
        try{
            await City.update(data,{
                where:{
                id:cityId
            }});
            return City;
        }catch(error){
            throw {error};
        }}
    async getcity({cityId}){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            throw {error};;
        }
    }
    
        

    }  
module.exports=CityRepository; 