let fetch = require("node-fetch");

function promiseFactory(url, numbWords, albumId) {
    url += albumId;
    return new Promise((resolve, reject) => {

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    reject("Error during fetch to: " + url);
                }
                return res.json();
            })
            .then(data => {
                let filteredData = data.filter(album => {
                    return (album.title.split(" ").length === numbWords);
                })
                filteredData = filteredData.map(p => {
                    return {
                        id: p.id,
                        title: p.title
                    }
                });
                let result = {albumId: albumId, album: filteredData};
                resolve(result);
            });

    });
}

let p1 = promiseFactory("https://jsonplaceholder.typicode.com/photos?albumId=", 3, 1);
let p5 = promiseFactory("https://jsonplaceholder.typicode.com/photos?albumId=", 3, 5);
let p6 = promiseFactory("https://jsonplaceholder.typicode.com/photos?albumId=", 3, 6);
let p7 = promiseFactory("https://jsonplaceholder.typicode.com/photos?albumId=", 3, 7);
let p9 = promiseFactory("https://jsonplaceholder.typicode.com/photos?albumId=", 3, 9);

/*
 let allResults = [];
 p1.then(data => {
 allResults.push(data);
 return p5;
 }).then(data=> {
 allResults.push(data);
 return p6;
 }).then(data => {
 allResults.push(data)
 }).then(()=> {
 for (let result of allResults) {
 console.log("Album ID: " + result.albumId);
 result.photos.forEach(photo => {
 console.log(`ID: ${photo.id}, Title: ${photo.title}`);
 });
 console.log("--------------------------------")
 }
 }
 ).catch(err => {
 console.log("UPS " + err);
 })

 */

module.exports = Promise.all([p1, p5, p6,p7,p9]);

/*
Promise.all([p1, p5, p6,p7,p9]).then(results => {
    //results.forEach(album=>console.log(album));
    console.log(JSON.stringify(results,null,2));
})
    */