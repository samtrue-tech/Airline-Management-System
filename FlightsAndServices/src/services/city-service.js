const {CityRepository}= require('../repository/index');
class CityService{
    constructor(){

    this.cityRepository=new CityRepository();
}
async createCity(data){
try{
        const city= await this.cityRepository.createCity(data);
        return city;
        }catch(error){
            console.log("something went wrong at service layer");
            throw{error};
        }
}
async deleteCity(){
    try{
                const response = await this.cityRepository.deleteCity();
                return response;
            }catch(error){
                console.log("something went wrong at service layer");
            throw{error};
               
    
            }

}
async updateCity(cityId,data){
try{
            const city= await this.cityRepository.updateCity(cityId,data);
        }catch(error){
            console.log("something went wrong at service layer");
            throw{error};

        }
}
async getCity(cityId){
    try{
                
     const city= await this.cityRepository.getcity(cityId);
     return city;
            
    }catch(error){
        console.log("something went wrong at service layer");
            throw{error};
    
    }}
}
module.exports = CityService;