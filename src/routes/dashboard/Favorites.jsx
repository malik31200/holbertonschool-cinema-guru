import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const token = localStorage.getItem('accessToken');

            const response = await axios.get('/api/titles/favorite/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMovies(response.data);
        };
        fetchFavorites();
    }, []);

    return (
        <div className="favorites-page">
            <h1>Movies you like</h1>
            <ul className="movies-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbId}
                        movie={movie}
                    />
                ))}
            </ul>
        </div>
    )
}
export default Favorites;
