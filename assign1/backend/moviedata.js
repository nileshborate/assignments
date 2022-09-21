
let movies = [
    {
        "imgsrc":"images/dark.jpg",
        "title":"DARK",
        "rating":"8",
        "releaseDate":"12/05/2022"
    },
    {
        "imgsrc":"images/lost_in_space.jpg",
        "title":"Lost In Space",
        "rating":"8.5",
        "releaseDate":"12/08/2020"
    },
    {
        "imgsrc":"images/money_heist.jpg",
        "title":"Money Heist",
        "rating":"9",
        "releaseDate":"12/08/2019"
    },
    {
        "imgsrc":"images/sacred_game.jpg",
        "title":"Sacred Game",
        "rating":"9.2",
        "releaseDate":"22/01/2022"
    },
    {
        "imgsrc":"images/squid_game.jpg",
        "title":"Squid Game",
        "rating":"8.5",
        "releaseDate":"22/09/2020"
    }
    
]


const getMovies = (req,res) => {
    console.log("Api call")
    res.send(movies)
}

module.exports = {getMovies}