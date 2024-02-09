import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavbarX = () => {
    const array = useSelector((state) => state.favoritesReducer.courses);

    return (<>
        <Navbar className="bg-body-tertiary navbar sticky-top">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>COURSE MONK</Navbar.Brand>
                </Link>

                <span>
                    <Link to={'/favorites'}>
                        <strong>Access Favorites </strong>
                    </Link>
                    : {array.length}
                </span>

            </Container>
        </Navbar>
    </>
    )
}

export default NavbarX