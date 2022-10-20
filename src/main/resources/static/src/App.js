import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ListaProductos from './componentes/ListaProductos';
import axios from 'axios';
import Header_App from './componentes/Header_App';
import FormularioProductos from './componentes/FormularioProductos';


function App() {
    const [productos, setProductos] = useState([]);

    const obtenerTProductos = () =>{
        /*fetch('http://localhost:8080/ATDA/api/v1/product/obtainEvery')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProductos(data);}
        )*/

        axios.get('http://localhost:8080/ATDA/api/v1/product/obtainEvery')
        .then(({data}) => setProductos(data));
    }

useEffect(obtenerTProductos, []);

    return (
        <>
            <Container>
                <Row>
                    <Col md = {6}>
                        <Header_App></Header_App>
                        <ListaProductos productos={productos}/>
                    </Col>
                    <Col md = {6}>
                        <FormularioProductos></FormularioProductos>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
}

export default App;