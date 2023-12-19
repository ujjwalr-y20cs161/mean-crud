const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',
    {
        name: { type: String },
        position: { type: String },
        location: { type: String },
        salary: {type: Number}
    }
);

module.exports = Employee;