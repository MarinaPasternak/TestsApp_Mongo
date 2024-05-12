const assert = require("assert");
const Student = require("../src/students");

describe("Read the data", () => {
    let studentBob;
    beforeEach(() => {
        studentBob = new Student({ name: "Bob"});
        studentBob.save()
        .then(() => done())
    });

    it("should find all Bobs", async () => {
        const students = await Student.find({name: 'Bob'})
    });
});