import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Home from './Home';
import { useDispatch } from "react-redux";  
import { useParams, useNavigate } from "react-router-dom"
const Add = ({ addFilm }) => {
    const dispatch=useDispatch();
    const [movie, setMovie] = useState({ Title: '', Poster: "" })
    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })

    }
    const navigate = useNavigate()
    const { id } = useParams()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addFilm(movie)
       
        setMovie({ Title: '', Poster: "" })
        navigate('/MoviesList')

          
    }
   
 
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title of Movie" onChange={handleChange} name="Title" value={movie.Title} />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>image</Form.Label>
                <Form.Control type="text" placeholder="image" onChange={handleChange} name="Poster" value={movie.Poster} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            
   
        </Form>)
}
export default Add;