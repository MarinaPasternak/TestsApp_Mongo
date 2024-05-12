const assert = require("assert");
const Student = require("../src/students");

describe("Delete the records", () => {
    let studentBob;

    beforeEach(() => {
        studentBob = new Student({ name: "Bob"});
        studentBob.save()
        .then(() => done())
    });

    it("should delete by id", done => {
        Student.findByIdAndDelete(studentBob._id)
        .then(() => Student.find({name: 'Bob'}))
        .then((student) => {
            assert(student === null);
            done();
        })
    });

    it("should delete by name", done => {
        Student.findByIdAndDelete({name: 'Bob'})
        .then(() => Student.find({_id: studentBob._id}))
        .then((student) => {
            assert(student === null);
            done();
        })
    });
});
