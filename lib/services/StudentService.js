class StudentService {

    static getStudents(students){
        return students 
    }

    static getEmailsWithCertification(students, haveCertification){
        const studentsEmailCertification = students.filter((student) => student.haveCertification === haveCertification);
        const studentsEmail = studentsEmailCertification.map((student) => student.email);
        return studentsEmail;
    }

    static getStudentsCredits(students){
        const studentsCredits = students.filter((students) => students.credits > 500);
        return studentsCredits;
    }

}

module.exports = StudentService;