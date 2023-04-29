import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const TheNav = () => {
    return (
        <Navbar variant='fluid' bg="light" expand="lg" >
            <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/admin">
                        <Nav.Link>Admin</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/stats">
                        <Nav.Link>Stats</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TheNav