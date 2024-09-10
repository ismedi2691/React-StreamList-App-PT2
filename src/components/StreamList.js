// src/components/StreamList.js
import React, { useState } from 'react';



const StreamList = ({ onAddMovie, onAddToCart }) => {
    const [input, setInput] = useState('');
    const [streamList, setStreamList] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            const updatedList = [...streamList, input];
            setStreamList(updatedList);
            setInput('');
        }
    };

    const handleItemClick = (item) => {
        setSelectedEvent(`You selected: "${item}"`);
    };

    const handleAddToMovies = (movie) => {
        onAddMovie(movie);
        setSelectedEvent(`Added "${movie}" to Movies!`);
    };

    const handleAddToCart = (item) => {
        onAddToCart(item);
        setSelectedEvent(`Added "${item}" to Cart!`);
    };

    return (
        <div className="streamlist-container">
            <h1>Your Streaming List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter movie title"
                    required
                />
                <button type="submit">Add to List</button>
            </form>

            {selectedEvent && <div className="event-message">{selectedEvent}</div>}

            <ul>
                {streamList.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                        {item}
                        <button onClick={() => handleAddToMovies(item)}>Add to Movies</button>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

           
        </div>
    );
};

export default StreamList;
