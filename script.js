// List of gifs from document

/*
1 'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
2 'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
3 'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
4 'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
5 'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
6 'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
7 'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
8 'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
9 'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
10 'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',

*/

// those are variables selecting main elements on the page

var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var voteBox = document.getElementById('gif-panel')
var mainImage = document.getElementById('main-image')
var youImage = document.getElementById('you-image')
var spotifyImage = document.getElementById('spotify-image')
var yrImage = document.getElementById('yr-image')
var youScore = document.getElementById('you-score')
var spotifyScore = document.getElementById('spotify-score')
var yrScore = document.getElementById('yr-score')
var iframeElement = document.querySelector("#song-iframe"); //select Iframe
var nextSong = document.getElementById('newSong')
var compareButton = document.getElementById('result-button')

// this is how you replace the image from the background
mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
compareButton.hidden = true;

// this is how you create a function
//function testClickFunction(){
  //alert('clickedddd')
//}
const gifs=[
  'url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)',
  'url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)',
  'url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)',
  'url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)',
  'url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)',
  'url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)',
  'url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)',
  'url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)',
  'url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)',
  'url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)',

]
var Dancible = ''
function ratingButton(rating) {
   Dancible = rating
  mainImage.style.backgroundImage = gifs[rating  - 1];

}
var slider = document.getElementById('range')

function rates(){
  Dancible = slider.value
mainImage.style.backgroundImage = gifs[Dancible - 1];
compareButton.hidden = false;
}
var songs = [
  "spotify.com:track:4YispFW4Atf5liJToaW01i",//Timing Yk Osiris
  "spotify.com:track:0KfgfxTnqfX4IfhVDpPYTd", //Not Regular person
  "spotify.com:track:0ZNrc4kNeQYD9koZ3KvCsy", // big bank
  "spotify.com:track:2wtGd1BVTNPIbmrtZew4XW", // aje
  "spotify.com:track:4jK1VQQGDnNOLfyVXCxGsR", // My Pyt
]

function getSpotifySrc(songs) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

async function setAlbumCover(song, element){
  var aa = await getAlbumCover(song);
  element.style.backgroundImage = `url(${aa})`;
}

async function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`)
    .then(r => r.json());
  return data.thumbnail_url;
}
var songsData = [
  {
    songtitle:'Timing',
    songURI: 'spotify.com:track:4YispFW4Atf5liJToaW01i',
    songscore:'..',
    artistname:'Yk Osiris',
    userrating:'..',

  }
,
  {
    songtitle:'Not a Regular person',
    songURI: 'spotify.com:track:0KfgfxTnqfX4IfhVDpPYTd',
    songscore:'..',
    artistname:'A boogie with a Hoodie ',
    userrating:'..',

  }
,
  {
    songtitle:'Big Bank ',
    songURI: 'spotify.com:track:0ZNrc4kNeQYD9koZ3KvCsy',
    songscore:'..',
    artistname:'YG',
    userrating:'..',

  }
  ,
  {
    songtitle:'Aje',
    songURI: 'spotify.com:track:2wtGd1BVTNPIbmrtZew4XW',
    songscore:'..',
    artistname:'Davido',
    userrating:'..',

  }
  ,
  {
    songtitle:'My PYT',
    songURI: 'spotify.com:track:4jK1VQQGDnNOLfyVXCxGsR',
    songscore:'..',
    artistname:'Wale',
    userrating:'..',

  }
]
songsData[0].songURI
songsData[0].songTitle
songsData[0].songArtist

songsData[1].songURI


//var songTitle = document.getElementById('song-title')
//var songArtist = document.getElementById('song-artist')

//songTitle.innerHTML = songdata[INDEX].songTitle
//songArtist.innerHTML = songdata[INDEX].songTitle
// function test1(){
//   Dancible = 1
//
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif')"
// }
//
// function test2(){
//   Dancible = 2
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif')"
// }
//
// function test3(){
//   Dancible = 3
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif')"
// }
//
// function test4(){
//   Dancible = 4
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif')"
// }
//
// function test5(){
//   Dancible = 5
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif')"
// }
//
// function test6(){
//   Dancible = 6
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif')"
// }
//
// function test7(){
//   Dancible = 7
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif')"
// }
//
// function test8(){
//   Dancible = 8
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif')"
// }
// function test9(){
//   Dancible = 9
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif')"
// }
//
// function test10(){
//   Dancible = 10
//   mainImage.style.backgroundImage= "url('https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif')"
// }
function Compare(){
  resultBox.hidden = false;
  voteBox.hidden = true;
  youScore.innerHTML = Dancible;
  youImage.style.backgroundImage = gifs[Dancible - 1];

}
function Next(){
  resultBox.hidden = true;
  voteBox.hidden = false;
  youImage.style.backgroundImage = gifs[Dancible - 1];

}



// Activity today will be

// 1. Create a variable to store the user selected Rating  userRating
// 2. Create 10 different functions to update the userRating score
// 3. Add the functions to the correpondent HTML elements, using the onclick="functionName()" attribute
// 4. Create a function to process the click on Compare button
// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image
