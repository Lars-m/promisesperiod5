let fetch = require("node-fetch");
let co = require("co");

co(function *(){
  var a1 = yield  fetch("https://jsonplaceholder.typicode.com/photos?albumId=1").then(res => {return res.json();});
  var a3 = yield  fetch("https://jsonplaceholder.typicode.com/photos?albumId=3").then(res => {return res.json();});
  var a6 = yield  fetch("https://jsonplaceholder.typicode.com/photos?albumId=6").then(res => {return res.json();});

  let albums = [
    filter(a1,1,3),filter(a3,3,3),filter(a6,6,3)
  ]
  console.log(albums);
}).catch(err => console.log(err));


function filter(albums,id, numbWords){
  let acceptedAlbums = albums.filter(album => {
    return (album.title.split(" ").length === numbWords);
  })
  acceptedAlbums = acceptedAlbums.map(p => {
    return {
      id: p.id,
      title: p.title
    }
  });
  return {id: id, albums: acceptedAlbums};
}
