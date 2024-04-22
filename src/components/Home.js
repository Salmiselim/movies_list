import React from 'react'
import { Container,Nav, Navbar} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"
import Add from './Add';

function Home() {
    const navigate = useNavigate()
    const { id } = useParams()
    const list = () => {
        navigate('/MoviesList')
    }
    const Add = () => {
        navigate('/Add')
    }
    return (
        
<div>
    <h1>welcome to my home page</h1>
</div>
    )
}

export default Home