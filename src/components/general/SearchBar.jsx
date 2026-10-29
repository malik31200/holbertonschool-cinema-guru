import './general.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({ title, setTitle }) {
    const handleInput = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <input 
                type="text" 
                placeholder="Search Movies"
                value={title}
                onChange={handleInput}
            />
        </div>
    )
}

export default SearchBar;
