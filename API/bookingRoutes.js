const express = require('express');
const bookingRoutes = express.Router();

let Booking = require('./booking');

bookingRoutes.route('/add').post(function (req, res) {
    let booking = new Booking(req.body);
    booking.save()
    .then(() => {
        res.status(200).json({'Booking': 'Booking added successfully'});
    })
    .catch(() => {
        res.status(400).send("unable to save to database");
    });
});

bookingRoutes.route('/').get(function (req,res){
    Booking.find(function(err, bookings) {
        if(err){
            res.json(err);
        }
        else {
            res.json(bookings);
        }
    });
});

bookingRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Booking.findById(id, function(err, bookings){
        if(err){
            res.json(err);
        }
        res.json(bookings);
    });
});

bookingRoutes.route('/update/:id').post(function (req, res) {
    Booking.findById(req.params.id, function(err, booking) {
        if(!booking)
            res.status(404).send("data is not found");
        else {
            booking.guest = req.body.guest;
            booking.name = req.body.name;
            booking.date = req.body.date;
            booking.save().then(() => {
                res.json('Update complete');
            })
            .catch(() => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

bookingRoutes.route('/delete/:id').delete(function (req, res) {
    Booking.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = bookingRoutes;