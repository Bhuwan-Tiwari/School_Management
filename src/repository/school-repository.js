const {School}= require('../models/index')

class SchoolRepository{

     async CreateSchool(data)
     {
        try {
            const result= await School.create(data)
            return result
        } catch (error) {
            console.log("something went wrong in repository layer")
            throw {error}
        }
     }

     async getAllSchool() {
        try {
            const result = await School.findAll();
            return result;           
        } catch (error) {
            console.log("something went wrong in repository layer")
            throw { error }
        }

    }

}

module.exports=SchoolRepository
