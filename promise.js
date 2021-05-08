

const movies = [
    {name: "Matrix", detail:"it is a movie"},
    {name: "Lotr", detail:"it is a movie"},
    {name: "Harry Potter", detail:"it is a movie"},
];
console.log(movies)

const listmovies = () => {
    movies.map(movie => {
        console.log(movie)
    })
}

const addMovie = (newMovie) => {
    const promiseMovie = new Promise((resolve, reject)=> {
        movies.push(newMovie);
        resolve('eklendi')
    });
    return promiseMovie;
}

addMovie({ name:'Forest Gump', detail:'good movie'})
    .then(() => {
        listmovies();
    })
    .catch(error => {
        console.log(error)
    })