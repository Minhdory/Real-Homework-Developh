const filmList = [
    {
        "name": "Paris, Texas",
        "country": "USA",
        "year": 1984,
        "director": "Wim Wenders",
        "watchedStatus": true
    },
    {
        "name": "Three Seasons",
        "country": "Vietnam",
        "year": 1999,
        "director": "Tony Bui",
        "watchedStatus": false
    },
    {
        "name": "Chungking Express",
        "country": "Hong Kong",
        "year": 1994,
        "director": "Wong Kar-wai",
        "watchedStatus": true
    },
    {
        "name": "Cemetery of Splendour",
        "country": "Thailand",
        "year": 2015,
        "director": "Apichatpong Weerasethakul",
        "watchedStatus": false
    },
    {
        "name": "The Scent of Green Papaya",
        "country": "Vietnam",
        "year": 1992,
        "director": "Tran Anh Hung",
        "watchedStatus": false
    },
    {
        "name": "Parasite",
        "country": "South Korea",
        "year": 2019,
        "director": "Bong Joon-ho",
        "watchedStatus": true
    },
    {
        "name": "Before Sunrise",
        "country": "USA",
        "year": 1995,
        "director": "Richard Linklater",
        "watchedStatus": true
    },
    {
        "name": "Breathless",
        "country": "France",
        "year": 1960,
        "director": "Jean-Luc Godard",
        "watchedStatus": false
    },
    {
        "name": "Cyclo",
        "country": "Vietnam",
        "year": 1994,
        "director": "Tran Anh Hung",
        "watchedStatus": true
    }
]
//a
for (let i=0; i< filmList.length; i++){
    if (filmList[i]["country"] === "Vietnam"){
        console.log(filmList[i]["name"])
    }
}
//b

