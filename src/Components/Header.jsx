import React from 'react'
import {Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
 <Navbar className="bg-body-tertiary">
        <Container>
         
          <Navbar.Brand  className='fw-bolder'>
          <Link to={'/'} style={{textDecoration:"none", color:"darkslategrey"}}>
          <i class="fa-solid fa-circle-play fa-spin me-2"></i>
            Media-Player
            </Link>
          </Navbar.Brand>
         
        </Container>
      </Navbar>    
    </>
  )
}

export default Header
