const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualThink Api welcome!"});
});

app.get("/v1/students/", (request, response) => {
    const allStudents = StudentController.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/emails/", (request, response) => {
    const emailsStudents = StudentController.getEmailStudents();
    response.json(emailsStudents);
});

app.get("/v1/students/credits/", (request, response) => {
    const creditsStudents = StudentController.getCredits();
    response.json(creditsStudents);
});

app.listen(port, () => {
    console.log(`VisualThink API in localhost:${port}`);
});