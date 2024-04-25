const assert = require("assert");
const Student = require("../src/students");

describe("Create the first data", () => {
    it("should save the student data", () => {
        const studentBob = new Student({ name: "Bob"});
        studentBob.save()
        .then(() => {
           assert(!studentBob.isNew);
           done(); 
        });
    });
});