const SchoolService = require('../service/school-service')

const schoolService =new SchoolService();

const create = async (req,res)=>
{
    try {
        const school =await schoolService.createSchool(req.body)
        return res.status(200).json({
            data: school,
            sucess: true,
            err: {},
            message: 'Sucessfully created a school'
          })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          success: false,
          message: 'not able to create a school',
          err: 'error'
        })
    
    }

  }

  const getAllSchool = async (req,res)=>
    {
        try {
            const school =await schoolService.getallSchool(req.query)
            return res.status(200).json({
                data: school,
                sucess: true,
                err: {},
                message: 'Sucessfully fetch the schools'
              })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
              data: {},
              success: false,
              message: 'not able to fetch the schools',
              err: 'error'
            })
        
        }
      }
module.exports = {create,
  getAllSchool
};