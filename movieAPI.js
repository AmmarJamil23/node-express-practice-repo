/*
req.params is an object that holds named route parameters extracted from the URL path. */ 
import express from "express";

const app = express();
app.use(express.json());

let movies = [
    {id: 1, title: "Inception", actor: "Leonardo de Caprio"},
    {id: 2, title: "The dark knight", actor: "Christian Bale"},
    {id: 3, title: "El Camino", actor: "Aaron Paul"},
    {id: 4, title: "Interstellar", actor: "Matthew Mchaugnhey"}

];

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Movie API running on port ${PORT}`)
})


app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const movie = movies.find(m => m.id === id);

    if (!movie) {
        return res.status(404).json({ message : "Movie not found"});
    }

    res.json(movie);
})

app.use(express.json());

app.post("/api/movies", (req, res) => {
    const { title, actor } = req.body;

    const newMovie = {
        id: movies.length + 1,
        title,
        actor
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
}) ;

app.put("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id, 10); 
  const movieIndex = movies.findIndex(m => m.id === id); 

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  // Replace the entire object
  const { title, actor } = req.body;
  movies[movieIndex] = { id, title, actor };

  res.json({ message: "Movie replaced", movie: movies[movieIndex] });
});


