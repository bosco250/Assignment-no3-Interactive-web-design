import React, { useState } from 'react';

const CheckboxForm = () => {
    const options = [
        { id: 1, label: "Angular" },
        { id: 2, label: "React" },
        { id: 3, label: "Java" },
        { id: 4, label: "Python" },
    ];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions((prev) =>
            prev.includes(value)
                ? prev.filter((option) => option !== value) 
                : [...prev, value] 
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Selected Options: ${selectedOptions.join(', ')}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Select your favorite frameworks/languages:</h3>
            <ul>
                {options.map((option) => (
                    <li key={option.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={option.label}
                                onChange={handleChange}
                            />
                            {option.label}
                        </label>
                    </li>
                ))}
            </ul>
            <button type="submit">Submit</button>
            <div>
                <h4>Selected Options:</h4>
                <p>{selectedOptions.join(', ') || 'None'}</p>
            </div>
        </form>
    );
};

export default CheckboxForm;