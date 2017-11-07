let crypto = require('crypto');

function makeP(length) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {
                var secureHex = buffer.toString('hex');
                resolve({length: length, random: secureHex});
            }
        });
    });
}

// function makeRandoms(cb) {
//     let secureRandoms = [];
//     crypto.randomBytes(length, function (err, buffer) {
//         if (err) {
//             cb(err);
//         }
//         else {
//             var secureHex = buffer.toString('hex');
//             secureRandoms.push({length: length, random: secureHex});
//         }
//     }
// }

var arr = [makeP(48), makeP(40), makeP(32), makeP(24), makeP(16), makeP(8)];
//export let secureRandom = Promise.all(arr);
module.exports.secureRandom = Promise.all(arr);
/*
 var arr = [makeP(48),makeP(40),makeP(32),makeP(24),makeP(16),makeP(8)];
 Promise.all(arr).then(all => {
 let result = {};
 result.title = "6 Secure Randoms";
 result.randoms = all;
 console.log(result);
 }).catch(err =>{
 console.log("ERROR: "+err);
 })
 */