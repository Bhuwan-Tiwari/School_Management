const SchoolRepository = require("../repository/school-repository")

class SchoolService {

    constructor() {

        this.schoolRepository = new SchoolRepository();
    }

    async createSchool(data) {

        try {
            const school = await this.schoolRepository.CreateSchool(data)
            return school;
        } catch (error) {
            console.log('something went wrong at service layer ')
            throw { error }
        }
    }

    async getallSchool(data) {

        var lat = parseFloat(data.latitude);
        var long = parseFloat(data.longitude);
        try {
            const school = await this.schoolRepository.getAllSchool()

            const sortedSchool = school.sort((a, b) => {
                var dist1 = Math.sqrt((lat - a.latitude) * (lat - a.latitude) + (long - a.longitude) * (long - a.longitude))
                var dist2 = Math.sqrt((lat - b.latitude) * (lat - b.latitude) + (long - b.longitude) * (long - b.longitude))
                return dist1-dist2;
            });
            return sortedSchool;

        } catch (error) {
            console.log('something went wrong at service layer')
            throw { error }
        }
    }
}

module.exports = SchoolService