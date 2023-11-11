
import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const Navigationbar = () => {
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <NavbarBrand>RASYID</NavbarBrand>
                <Nav>
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigationbar