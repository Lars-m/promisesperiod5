var express = require('express');
var router = express.Router();

//import secureRandom from "../exercises/promiseCryptoEx";
//let secureRandom = require("../exercises/promiseCryptoEx");
/* GET users listing. */
router.get('/securerandoms', function(req, res, next) {
  let secureRandom = require("../exercises/promiseCryptoEx").secureRandom;
  secureRandom.then(all =>{
    let result = {};
    result.title = "6 Secure Randoms";
    result.randoms = all;
    res.json(result);
  });
});

router.get('/albumthreewords', function(req, res, next) {
  let combinedResult = require("../exercises/promise-EX2");
  combinedResult.then(all=> res.json(all));
});

module.exports = router;
