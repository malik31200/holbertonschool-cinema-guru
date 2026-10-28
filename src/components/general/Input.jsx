import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './general.css';

function Input({
    label,
    type,
    className = '',
    value,
    setValue,
    icon,
    inputAttributes = {},
}) {
    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={`input-container ${className}` }>
            {label && <label>{label}</label>}
            <div className="input-wrapper">
                {icon && <FontAwesomeIcon icon={icon} />}

                <input
                    {...inputAttributes}
                    type={type}
                    value={value}
                    onChange={handleInput}
                    className={className}
                />
            </div>
        </div>
    )
}

export default Input;
