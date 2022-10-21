import { Container, Navbar } from "react-bootstrap";

const Header_App = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/1189/1189719.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    A Tiro De As
                </Navbar.Brand>
            </Container>
        </Navbar>
     );
}
 
export default Header_App;