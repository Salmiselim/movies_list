import React from 'react'
import { Card ,Button} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"

function About({movies}) {
  console.log('khhblgg',movies)
    const navigate = useNavigate()
    const { id } = useParams()
    const movie = movies.find((elt) => elt.id.toString() === id)    
    console.log(movie)
    const back=()=>{
      navigate('/')
    }
  return (
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
  <Card.Img variant="top" src={movie.image}/>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
     {movie.About}
    </Card.Text>
    <Button onClick={back}>Go back</Button>
  </Card.Body>
</Card>
  )
}

export default About