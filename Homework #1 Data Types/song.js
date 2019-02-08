/* There were a lot more songs to list per album 
but I did not list them all */
// I only used one artist so that this list wouldnt get too long
let myMusic = [
    {
        artist: "Lupe Fiasco",
        genre: ["Hip hop", "Alternative hip hop"],
        label: "Atlantic Records",
        website: "www.lupefiasco.com",
        albums: [
            {
                albumTitle: "Lupe Fiasco's The Cool",
                releaseYear: "2007",
                songs: [
                    {
                        songName: 'Baba Says Cool for Thought',
                        songDurationInSeconds: 47,
                        featuring: null
                    },
                    {
                        songName: 'Free Chilly',
                        songDurationInSeconds: 62,
                        featuring: "Demarco Castle"
                    },
                    {
                        songName: "Go Go Gadget Flow",
                        songDurationInSeconds: 250,
                        featuring: null
                    },
                    {
                        songName: "The Coolest",
                        songDurationInSeconds: 313,
                        featuring: null
                    },
                    {
                        songName: "Superstar",
                        songDurationInSeconds: 289,
                        featuring: "Matthew Santos"
                    },
                    {
                        songName: "Paris, Tokyo",
                        songDurationInSeconds: 271,
                        featuring: null
                    }
                ]
            },
            {
                albumTitle: "Food & Liquor",
                releaseYear: "2006",
                songs: [
                    {
                        songName: "Real",
                        songDurationInSeconds: 242,
                        featuring: "Sarah Green"
                    }
                ]
            }
    ]
    }
];

console.log('find artist', myMusic[0].artist);
console.log('favorite song', myMusic[0].albums[0].songs[5].songName);
console.log('how many albums', myMusic[0].albums.length);