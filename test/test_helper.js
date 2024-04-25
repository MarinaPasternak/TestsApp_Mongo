const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/students_db', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occured", error)
    });

beforeEach((done) => {
    //clear collection before every test
    mongoose.connection.collections.students.drop();
    done();
});
