const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Booking = new Schema({
    guest: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: String
    }
},{
    collection: 'bookings'
});

module.exports = mongoose.model('Booking', Booking);