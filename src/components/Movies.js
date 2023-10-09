import React, { useContext } from "react";
import { movieContext } from "../App";

const Movies = () => {
    const { filteredMovie } = useContext(movieContext)

    return filteredMovie?.map((movies =>
        <div className="movieCard"  >
            <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt={movies.title}/>
            <p>{movies.title}</p>
        </div>
        )) 
}

export default Movies