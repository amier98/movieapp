import React, { useContext } from "react";
import { filterContext, movieContext } from "../App";

const FilterMovies = () => {

    const { popularMovies, setFilteredMovie} = useContext(movieContext)
    const { genres} = useContext(filterContext)


    const handleClick = (id) => {
        //need to get the genreID
        //Might need to make another get call
        // if the genre_id is the same as the id for the genre call, display 
        const filterMovie = popularMovies.filter(filter => filter.genre_ids.includes(id))
        setFilteredMovie(filterMovie)
        
    }

    return (
        <div className="buttonContainer">
            {genres?.map((item => 
                <button className="buttonStyle" key={item.id}
                onClick={() => handleClick(item.id)}>{item.name}</button>
            ))}
        </div>
    )
}

export default FilterMovies