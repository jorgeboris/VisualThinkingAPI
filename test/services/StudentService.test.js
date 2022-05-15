const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Test para ExplorerService", () => {
    test("Verificar students.json", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentService.getStudents(students).length).toBeGreaterThanOrEqual(0);
    });

});
