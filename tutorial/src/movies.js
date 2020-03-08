// a movie object
var myMovie = {
    title: "Sherlock Holmes",
    releaseYear: 2010,
    duration: 2.0,
    actors: [
        {
            name: "Robert Downey Jr",
            role: "Sherlock Holmes"
        },
        {
            name: "Jude Law",
            role: "Dr. John Watson"
        }
    ]
};

document.write(myMovie.actors[0].name);