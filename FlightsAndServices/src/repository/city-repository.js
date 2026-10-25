const {City}=require('../models');
const { Op } = require("sequelize");

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
     async updateCity(cityId,data){
        try{
            await City.update(data,{
                where:{
                id:cityId
            }});
            return City;
        }catch(error){
            throw error;
        }}
    async getcity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            throw {error};;
        }
    }
    // jab search karte hai toh hame jaise hamne search box me p dala to p se start hone wali top 5 cities ne naam aane chahiye toh ham usko approach karenge
    //usko karne ke liye ha filter object banayenhe filter object ka kaam hai ki hame search box me jo bhi input mile usko filter karna hai aur uske basis pe hame data milega
    //iske peeche hamari thinking hai ki hame search box me jo bhi input mile usko filter karna hai aur uske basis pe hame data milega
    //filter ko object hi kyu liya? answer to this is ki agar hame future me aur bhi filter add karna hai toh ham easily kar sakte hai aur agar hame filter ko string ya array me liya toh hame future me aur bhi filter add karne me problem aayegi    
    //filter me op ka use krke starts with lagayenge aur uske baad top 5 cities ko return karenge
    async getAllCities(filter){
         try{
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{[Op.startsWith]:filter.name}
                    }
                })
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        }catch(error){
            throw {error};;
        }
    }
    
 }  
module.exports=CityRepository; 