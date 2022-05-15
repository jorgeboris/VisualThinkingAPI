const Reader = require("./../../lib/utils/Reader");
const StudentController = require("./../../lib/controllers/StudentController");

describe("Test para ExplorerController", () => {
    test("Verificar los students", () => {
        const students = Reader.readJsonFile("students.json");
        expect(StudentController.getAllStudents(students).length).toBeGreaterThanOrEqual(0);
    });

});
