import React from "react";

function Header({ filters, filter, onFilterChange }) {
  const handleAll = () => {};
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
