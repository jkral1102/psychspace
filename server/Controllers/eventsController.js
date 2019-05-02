const db = require("../models");

// Defining methods for the eventsController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));

  },

  create: function(req, res) {
    console.log(req.body)
    db.Event
      .create(req.body)
      .then(data =>{
         res.json(data)
        })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    console.log('server update called')
    db.Event
      .findByIdAndUpdate(req.params.id,
        { $set:
          {name: req.body.name, location: req.body.location, date: req.body.date, img: req.body.img}}
        // { $push: 
        //   {comments: 
        //     {comment: req.body.commentBody.comment, username: req.body.commentBody.username}}}
      ).then(data => data.save()).then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Event
      .findById(
        { _id: req.params.id }
      )
      .then(data => data.remove())
      .catch(err => res.status(422).json(err));
  },

    findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
};
