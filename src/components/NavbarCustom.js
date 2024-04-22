import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React , {useState}from 'react'
import { Navbar ,Container,Form,Button,FormControl,Nav} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"

function NavbarCustom({onSearch}) {
    const [caracter,setCaracter]=useState('');
    const handleChange=(event)=>{
        setCaracter(event.target.value)
    }
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
        onSearch(caracter);
        setCaracter(' ')
    }
    const list = () => {
        navigate('/MoviesList')
    }
    const Add = () => {
        navigate('/Add')
    }
    const back = () => {
        navigate('/')
    }
    return (
        <Navbar bg="light" expand="lg" style={{width:"100%",dsiplay:"flex"}}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                    <Form className="d-flex" onSubmit={onSubmit}>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}
                            value={caracter}
                        />
                        <Button variant="outline-success" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={back}>Home</Nav.Link>
      <Nav.Link onClick={list}>Go to Movies List</Nav.Link>
      <Nav.Link onClick={Add}>Add</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </Navbar>
    )
}

export default NavbarCustom