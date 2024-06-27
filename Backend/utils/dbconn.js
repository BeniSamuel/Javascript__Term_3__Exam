const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost/exam");
        console.log('Connected to mongodb successfully');
    } catch (error) {
        console.log(error);
    }
}


module.exports = dbconnection;
