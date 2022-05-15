const Reader = require("./../../lib/utils/Reader");
const StudentController = require("./../../lib/controllers/StudentController");

describe("Test para StudentController", () => {
    test("Verificar los students", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentController.getAllStudents(students).length).toBeGreaterThanOrEqual(0);
    });

    test("Obtener Emails de Students", () => {
        const emailsStudents = StudentController.getEmailStudents(true);
        expect(emailsStudents).toContain("Sexton@visualpartnership.xyz");
    });

    test("Obtener estudiantes con creditos mayores a 500", () => {
        const amountCredits = StudentController.getCredits();
        expect(amountCredits.length).toBe(27);
    });
});
