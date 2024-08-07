import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assests/images/logo.svg';
import { LiaLanguageSolid } from 'react-icons/lia';
import { BiPhoneCall } from 'react-icons/bi';
import { WiDayThunderstorm } from 'react-icons/wi';

const Header = () => {

  const [scrollval, setscrollval] = useState(null);
  const [transition, settransition] =useState('0px');

 useEffect(()=>{
  const handlescroll = ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 500){
      settransition('0.4s');
       setscrollval('0px');

    }
    else{
      settransition('0px')
      setscrollval(`${-window.scrollY}px`)
    }

  }
  window.addEventListener('scroll', handlescroll);

 }, [])
  return (
    <Navbar expand="lg" className="bg-white py-2"
    style={{
      position:'sticky',
      zIndex:'9999',
      top: scrollval,
      transition: transition
    }}
    >
    <Container fluid className='px-2'>
      <Navbar.Brand href="/"> <img src={logo} style={{width:'124px'}}></img> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">PDF Catalog</Nav.Link>
          <Nav.Link href="#action2" className='collection_icon'>Collections By Mistry.Store</Nav.Link>
          <Nav.Link href="#action2">About Us</Nav.Link>
          <Nav.Link href="#action2">Contact Us</Nav.Link>
        
        </Nav>
        <Form className="d-flex align-items-center headerFOam">
          <Nav.Link href="#action2">
            <LiaLanguageSolid/>
          </Nav.Link>
          <Nav.Link href="#action2">
            <BiPhoneCall/>
          </Nav.Link>
          <Button variant="outline-success" className='themebtn'>Login</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header






