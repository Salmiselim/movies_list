import React from "react";
import { Link } from "react-router-dom";
import SingleMovie from "./SingleItem";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"
const MoviesList = (props) => {
    const navigate = useNavigate()
    
    const back = () => {
        navigate('/')
    }




    return (
        <>
            <h1>List:</h1>
            {props.movies.map((movie, index) => (<SingleMovie key={index} movie={movie} />)

        
            )}
            
        </>
    )
}
export default MoviesList;