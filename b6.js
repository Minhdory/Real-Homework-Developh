let songs = ["Cry Baby", "NAKKA", "People Watching", "Reckless", "Hello Future", "Know me too well", "Villain", "Heather"];
let artists = ["OFFICIAL HIGE DANDISM", "AKMU", "Conan Gray", "Madison Beer", "NCT Dream", "New Hope Club", "Stella Jang", "Conan Gray"];
//https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
let playlist = {}
for (let i=0; i<songs.length; i++){
    playlist[songs[i]] = artists[i];
}
console.log(playlist)

let reverse_playlist = {}
for (let i=0; i<songs.length; i++){
    reverse_playlist [artists[i]] = [songs[i]];
}
console.log(reverse_playlist)
