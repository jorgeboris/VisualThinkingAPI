const Reader = require('./../utils/Reader')
const StudentService = require('./../services/StudentService')

class StudentController{

    static getAllStudents(){
        const students = Reader.readJsonFile("students.json");
        return students;
    }

    static getEmailStudents(){
        const students = Reader.readJsonFile("students.json");
        const getEmail = StudentService.getEmailsWithCertification(students, true);
        return getEmail;
    }

    static getCredits(){
        const students = Reader.readJsonFile("students.json");
        const credits = StudentService.getStudentsCredits(students)
        return credits;
    }

}

module.exports = StudentController;