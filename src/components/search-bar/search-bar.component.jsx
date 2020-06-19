import React from 'react';

import './search-bar.styles.css';

const SearchBar = ({handleTodo}) => (
    <div className="search-title-container">
        <h1 className="title">Today's list</h1>
        <label className="label">What you have todo?</label>
        <div className="text-and-button">
            <input className="input"type="text" />
            <button onClick={handleTodo}>Add it!</button>
        </div>
    </div>
)

export default SearchBar;