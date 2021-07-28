let songs = ["Hayloft", "Vertigo", "Teenagers", "Boilermaker", "Jumpsuit", "Elephant", "Black Roller Coming", "Heathens"];
let artists = ["Mother Mother", "Alice Merton", "My Chemical Romance", "Royal Blood", "21 Pilots", "Tame Impala", "Phillip Sayce", "21 Pilots"];
let playlist = {};
//https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
for (let i=0; i<songs.length; i++){
    playlist[songs[i]] = artists[i];
}
console.log(playlist)
