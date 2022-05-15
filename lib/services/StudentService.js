class StudentService {

    static getStudents(students){
        return students 
    }

    static getEmailsWithCertification(students, haveCertification){
        const studentsEmail = students.filter((student) => student.haveCertification === haveCertification);
        return studentsEmail;
    }

    static getStudentsCredits(students){
        const studentsCredits = students.filter((students) => students.credits > 500);
        return studentsCredits;
    }

}

module.exports = StudentService;