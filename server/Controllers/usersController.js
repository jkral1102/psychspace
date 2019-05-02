const db = require("../models");
const jwt = require('jsonwebtoken');

// Defining methods for the articlesController
// Register a new user - first check if username exists
// If not, create!
module.exports = {
  register: function (req, res) {
    const user = req.body;
    db.User
    // Check if new username exists
    .findOne({username: user.username}, function(err,obj) {
      if (obj) {
        res.json('false');
      } else{
        // Create new user in database
        db.User.create(user)
        .then(data => {
          generateToken(user, res)
        })
        .catch(err =>
          res.status(422).json(err))
      }
    })
  },

  login: function (req, res) {
    const user = req.body;
    console.log(user);
    db.User
    .findOne({ username: user.username, password: user.password }, function (err, data) {
      // If username and password combination exist, send token
      // Else - login error message
      if (data) {
        generateToken(data, res)

      }
        else{
        res.json('false')
    }
  })
  }
}

const generateToken = (user, res) => {
  jwt.sign({ user }, 'yOvcW%#LmN}>pd/<_J}mC>KZ#(tk}}2<d4CCPKS)rQ+ILyxG~DN[~mqXlJkk,wp', { expiresIn: '1 day' }, (err, token) => {
  res.json({ token });
})}

  // }
  // findAll: function(req, res) {
  //   db.Article
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));

  // },

//create: function(req, res) {
  //   console.log(req.body)
  //   db.Article
  //     .create(req.body)

  //     .then(data =>{
  //        res.json(data)
  //       })
  //     .catch(err => res.status(422).json(err));
  // },

  // update: function(req, res) {
  //  // console.log(req.id)
  //   console.log('server update called')
  //   db.Article
  //     .findByIdAndUpdate(req.params.id,
  //       { $set:
  //         {articletitle: req.body.articletitle, articlebody: req.body.articlebody}}
  //       // { $push: 
  //       //   {comments: 
  //       //     {comment: req.body.commentBody.comment, username: req.body.commentBody.username}}}
  //     ).then(data => data.save()).then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // },

  // remove: function(req, res) {
  //   db.Article
  //     .findById(
  //       { _id: req.params.id }
  //     )
  //     .then(data => data.remove())
  //     .catch(err => res.status(422).json(err));
  // },

  //   findById: function(req, res) {
  //   db.Article
  //     .findById(req.params.id)
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // },