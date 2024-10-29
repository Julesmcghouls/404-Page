import React from "react";
const GiphySearch = () => {
    return (
        <div>
        <h1>Giphy Search</h1>
        <input type="text" placeholder="Search for GIF..."/>
        <button>Search</button>
        <div className="gif-results"></div>
        </div>
    );
};

export default GiphySearch;
