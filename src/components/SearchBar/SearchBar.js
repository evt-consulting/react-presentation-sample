import React from 'react'; 

import './SearchBar.css';

function searchBar(props) {
    return <input 
            onChange={props.handleSearchTextChange} 
            type="text" 
            className="input" />;
}

export default searchBar;