let songs = ["Cry Baby", "NAKKA", "People Watching", "Reckless", "Hello Future", "Know me too well", "Villain", "Heather"];
let artists = ["OFFICIAL HIGE DANDISM", "AKMU", "Conan Gray", "Madison Beer", "NCT Dream", "New Hope Club", "Stella Jang", "Conan Gray"];
let playlist = {};
//https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
for (let i=0; i<songs.length; i++){
    playlist[songs[i]] = artists[i];
}
console.log(playlist)
