// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const handleAddMovie = (movie) => {
        setMovies((prevMovies) => [...prevMovies, movie]);
    };

    //Adding items to cart
    const handleAddToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    //Removing items in cart
    const handleRemoveFromCart = (itemToRemove) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    };

    //Adding Icons to header tabs
    //CART: Adding cart count notification when adding new cart items
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">
                        <span class="material-icons">home</span> StreamList </Link>
                            </li>

                    <li><Link to="/movies">
                        <span class="material-icons">movie</span> Movies </Link>
                    </li>
                    
                    <li><Link to="/cart">
                        <span class="material-icons">shopping_cart</span> Cart
                        {cartItems.length > 0 && (
                            <span className="cart-count">{cartItems.length}</span>
                        )} 
                    </Link>                        
                    </li>

                    <li><Link to="/about">
                        <span class="material-icons">info</span> About </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<StreamList onAddMovie={handleAddMovie} onAddToCart={handleAddToCart} />} />
                <Route path="/movies" element={<Movies movieList={movies} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;