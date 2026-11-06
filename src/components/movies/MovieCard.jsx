import './movies.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faClock
} from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const fetchMovieLists = async () => {
            const token = localStorage.getItem('accessToken');
            const favoriteResponse = await axios.get('/api/titles/favorite/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const watchLaterResponse = await axios.get('/api/titles/watchLater/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setIsFavorite(
                favoriteResponse.data.some((title) => title.imdbId === movie.imdbId)
            );

            setIsWatchLater(
                watchLaterResponse.data.some((title) => title.imdbId === movie.imdbId)
            );
        };

        fetchMovieLists();
    }, [movie.imdbId]);

    const handleClick = async (type) => {
            const token = localStorage.getItem('accessToken');
            const isActive = type === 'favorite' ? isFavorite : isWatchLater;
            const url = `/api/titles/${type}/${movie.imdbId}`;

            if (isActive) {
                await axios.delete(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (type === 'favorite') {
                    setIsFavorite(false);
                } else {
                    setIsWatchLater(false);
                }
            } else {
                await axios.post(url, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (type === 'favorite') {
                    setIsFavorite(true);
                } else {
                    setIsWatchLater(true);
                }
            }
        };

        return (
            <li className="movie-card">
                <img
                    className="movie-poster"
                    src={movie.imageurls?.[0]}
                    alt={movie.title}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />

                <div className="movie-actions">
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => handleClick('favorite')}
                        className={isFavorite ? 'active' : ''}
                    />

                    <FontAwesomeIcon
                        icon={faClock}
                        onClick={() => handleClick('watchlater')}
                        className={isWatchLater ? 'active' : ''}
                    />
                </div>
                <h3>{movie.title}</h3>
                <p>{movie.synopsis}</p>
                <div className="movie-genres">
                    {movie.genres.map((genre) => (
                        <span key={genre}>{genre}</span>
                    ))}
                </div>
            </li>
        )
}

export default MovieCard;
