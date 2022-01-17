import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home (){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
    };
    useEffect(()=>{getMovies()}, []);

    return (
    <div>
        {loading ? (<h1>Loading...</h1>) : (
        <div>
        {movies.map((movie, ind) => (
            <Movie key={ind} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} rating={movie.rating} />
        ))}
        </div>)}
    </div>
    );
}

export default Home;