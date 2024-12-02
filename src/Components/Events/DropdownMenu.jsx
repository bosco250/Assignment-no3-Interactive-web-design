import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); 
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`); 
    setIsOpen(false); 
  };

  const options = ['Option 1', 'Option 2', 'Option 3']; 

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={toggleDropdown}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: 'black',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '40px',
            left: '0',
            margin: '0',
            padding: '10px',
            listStyle: 'none',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                borderBottom: index !== options.length - 1 ? '1px solid #ddd' : 'none',
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
