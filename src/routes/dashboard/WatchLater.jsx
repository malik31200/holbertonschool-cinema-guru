import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WatchLater() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchWatchLater = async () => {
            const token = localStorage.getItem('accessToken');

            const response = await axios.get('/api/titles/watchLater/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMovies(response.data);
        }
        fetchWatchLater();
    }, []);

    return (
        <div className="watch-later-page">
            <h1>Movies to watch later</h1>
            <ul className="movies-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbId}
                        movie={movie}
                    />
                ))}
            </ul>
        </div>
    );
}
export default WatchLater;
