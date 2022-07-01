import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import GlobalSvgSelector from '../../images/GlobalSvgSelector'
import s from './Header.module.scss'

const Header = () => {
  return (
    <>
        <Navbar bg="white" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <GlobalSvgSelector id={`header-logo`}/>
                    <span className={s.brand}>
                        React Weather
                    </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
    
  )
}

export default Header