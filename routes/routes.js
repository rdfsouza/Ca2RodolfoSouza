const express = require("express");
const Route = express();
const Tickets = require('../data');


require('../DB');


Route.get('/tickets', (req, res) => {
    Tickets.find({}).then((tickets) => {
        res.send(tickets);
    });
});


Route.post('/tickets', (req, res) => {
    Tickets.create(req.body).then((tickets) => {
        res.send(tickets);
    });
});


Route.delete('/tickets/:id', (req, res) => {
    Tickets.findByIdAndRemove({ _id: req.params.id })
        .then((tickets) => {
            res.send(tickets);
        });
});

Route.put('/tickets/:id', (req, res) => {
    Tickets.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Tickets.findOne({ _id: req.params.id }).then((tickets) => {
            res.send(tickets);
        });
    });
});



module.exports = Route;

