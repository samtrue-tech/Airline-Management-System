const {city}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const cityResponse=await city.create({name});
            return cityResponse;
        }catch(error){
            
            throw {error};
        }}   
     async deleteCity({cityId}){
        try{
            await city.destroy({
                where:{ id:cityId}
            });
            return true;
        }catch(error){
            throw {error};
        }}
     async updateCity({data,cityId}){
        try{
            await city.update(data,{
                where:{
                id:cityId
            }});
            return city;
        }catch(error){
            throw {error};
        }}
    async getcity({cityId}){
        try{
            const city=await city.findbyPk(cityId);
            return city;
        }catch(error){
            throw {error};;
        }
    }
    
        

    }  
module.exports=CityRepository; 