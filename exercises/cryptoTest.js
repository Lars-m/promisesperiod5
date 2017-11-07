var {secureRandom} = require("./promiseCryptoEx");

secureRandom.then(data=> console.log(data));