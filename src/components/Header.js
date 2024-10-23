import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <h1>My Music App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </header>
  );
};

export default Header;
