import { Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header_App from "./Header_App";

const Inicio = () => {
    return ( 
        <div>
            <Header_App/>
            <Container fluid>
                <h1 className="text-primary">
                    BIENVENIDO - A TIRO DE AS
                </h1>
                <ul>
                    <Button variant="outline-dark" className="me-5">
                        <Link to="/product/obtainEvery">LISTADO DE PRODUCTOS</Link>
                    </Button>
                    <Button variant="outline-dark">
                        <Link to="/product/catalogo">CATALOGO DE PRODUCTOS</Link>
                    </Button>
                </ul>
            </Container>
        </div>
     );
}
 
export default Inicio;