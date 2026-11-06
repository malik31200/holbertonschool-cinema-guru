import './movies.css';
import { useState } from 'react';

function Tag({ genre, filter, genres, setGenres }) {
    const [selected, setSelected] = useState(false)
    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter((item) => item !== genre));
            setSelected(false);
        } else {
            const newGenres = [...genres, genre];
            setGenres(newGenres);
            setSelected(true);
        }
    };

    return (
        <li
            className={selected ? 'tag selected' : 'tag'}
            onClick={handleTag}
        >
            {genre}
        </li>
    )
}

export default Tag;
