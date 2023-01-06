import React from "react";
import {useEffect} from "react";
import './App.css'
import './search.svg'
import MovieCard from "./MovieCard";


// const API_URL = 'http://www.omdbapi.com?apikey=aded7cf6';

const movie1 = {
    "Title":"AMZING SPIDEY",
    "Year":"2012",
    "Poster":"N/A"
}


const App = () => {
//     const searchMovies = async (title) => {
//         const response = await fetch('${API_URL}&s=${title}');

//         const data = await response.json();
//         console.log(data.Search);
//     }
//     useEffect(() => {

//         searchMovies('Spiderman');
    
//     }, []);

    return(
    
        <div className="app">
            <h1>PIRATEHUB</h1>

            <div className="search">
                 <input
                 placeholder="Search For Moviess"
                 value="Superman"
                 onChange={() => {}}
                 />
                 <img src="SearchIcon"
                 alt="search"
                 onClick={ () => {}}
                 />   
            </div>
            <div className="Container">
               <MovieCard movie1={movie1}/>

            </div>
        </div>
        
    );

}
export default App;