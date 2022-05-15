class StudentService {

    static getStudents(students){
        return students 
    }

    static getEmailsWithCertification(students, haveCertification){
        const studentsEmail = students.filter((student) => student.haveCertification === haveCertification);
        return studentsEmail;
    }

}

module.exports = StudentService;