import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Filter from '../../components/movies/Filter';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState('latest');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);

    const loadMovies = async (page) => {
        const token = localStorage.getItem('accessToken');

        const response = await axios.get('/api/titles/advancedsearch', {
            params: {
                minYear,
                maxYear,
                genres: genres.join(','),
                title,
                sort,
                page,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log('Réponse API HomePage :', response.data);

        setMovies((prevMovies) =>
            page === 1 ? response.data.titles : [...prevMovies, ...response.data.titles]);
    };

    useEffect (() => {
        setPage(1);
        loadMovies(1);
    }, [minYear, maxYear, genres, sort, title]);

    return (
        <div className="home-page">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                genres={genres}
                setGenres={setGenres}
                sort={sort}
                setSort={setSort}
                title={title}
                setTitle={setTitle}
            />

            <ul className="movies-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbId}
                        movie={movie}
                    />
                ))}
            </ul>

            <Button
                label="Load More.."
                onClick={() => {
                    const nextPage = page + 1;
                    setPage(nextPage);
                    loadMovies(nextPage);
                }}
            />
        </div>
    )
}

export default HomePage;
