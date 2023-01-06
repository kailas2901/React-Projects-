import React from "react";

const MovieCard = ({movie1}) => {
    return(
        <div className="movie">
        <div>
            <p>{movie1.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster} alt={movie1.title}/>
        </div>
        </div>

    )
}
export default MovieCard;