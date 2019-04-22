var express = require('express');
var router = express.Router();

/* GET home page. attaching a "router" variable to Express's router method, 
then using that method when an attempt is made to HTTP get the top level directory of our website.
*/
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
// extracting the db object we passed to our http request, 
// and then using that db connection to fill our docs variable with 
// database documents, ie: user data. Then we do a page render just like the other two GETs in this route file.
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
      res.render('userlist', {
          "userlist" : docs
      });
  });
});


module.exports = router;
