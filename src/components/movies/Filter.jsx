import './movies.css';
import SearchBar from '../general/SearchBar';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

function Filter({ 
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    sort,
    setSort,
    genres,
    setGenres,
    title,
    setTitle,
}) {
    const sortOptions = [
        { value: 'latest', label: 'Latest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'highestrated', label: 'Highest Rated' },
        { value: 'lowestrated', label: 'Lowest Rated' },
    ];

    const genreOptions = [
        'action',
        'drama',
        'comedy',
        'biography',
        'romance',
        'thriller',
        'war',
        'history',
        'sport',
        'sci-fi',
        'documentary',
        'crime',
        'fantasy'
    ];

    return (
        <div className="filter">
            <SearchBar
                title={title}
                setTitle={setTitle}
            />

            <input
                type="number"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
            />

            <input
                type="number"
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
            />

            <SelectInput
                label="Sort By"
                options={sortOptions}
                value={sort}
                setValue={setSort}
            />

            <ul>
                {genreOptions.map((genre) => (
                    <Tag
                        key={genre}
                        genre={genre}
                        filter={true}
                        genres={genres}
                        setGenres={setGenres}
                    />
                ))}
            </ul>
        </div>
    )
};

export default Filter;
