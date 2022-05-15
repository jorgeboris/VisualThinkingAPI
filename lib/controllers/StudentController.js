const Reader = require('./../utils/Reader')
const StudentService = require('./../services/StudentService')

class StudentController{

    static getAllStudents(){
        const students = Reader.readJsonFile("students.json");
        return students;
    }

    

}

module.exports = StudentController;