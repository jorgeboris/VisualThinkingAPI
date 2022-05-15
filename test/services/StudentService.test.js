const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Test para ExplorerService", () => {
    test("Verificar students.json", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentService.getStudents(students).length).toBeGreaterThanOrEqual(0);
    });
    
    test("Recibir emails de estudiantes con certificacion", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentService.getEmailsWithCertification(students, true).length).toBe(29);
    });

    test("Recibir estudiantes con creditos mayores a 500", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentService.getStudentsCredits(students).length).toBe(27);
    });
});
