import { Nav } from "react-bootstrap";

const Header_App = () => {
    return ( 
        <Nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src = "/public/Icono-TiroAlBlanco.svg" width="30" height="30" alt=""></img>
                A Tiro de As
            </a>
        </Nav>
     );
}
 
export default Header_App;