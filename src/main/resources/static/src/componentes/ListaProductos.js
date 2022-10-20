import React from "react";
import { Table } from "reactstrap";
import PintarData from "./PintarData";

const  ListaProductos = ({productos}) => {
    return (  
        <>
            <h1 className="mb-3">
                LISTA PRODUCTOS
            </h1>
            
                <Table bordered>
                    <thead className="table-active">
                        <tr>
                            <th className="text-center">Nombre</th>
                            <th className="text-center">Categoria</th>
                            <th className="text-center">Disponibilidad</th>
                            <th className="text-center">Precio</th>
                            <th className="text-center">Stock</th>
                            <th className="text-center">Descripción</th>
                        </tr>
                    </thead>
                    <PintarData productos={productos}/>
                </Table>
                {/*<div className="mb-3 border rounded p-3" key = {productos.id}>
                    <div className="d-flex justify-content-between mb-1">
                        <div className="fw-bold">
                            {productos.name}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEdit} className="cursor-pointer"/>
                            <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2"/>
                        </div>
                    </div>
                    <div>
                        {
                            productos.availability ?
                            <div className="text-success small">
                                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>{" "}
                                Completado
                            </div>
                            :
                            <div className="text-seundary small">
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
                                Pendiente
                            </div>
                        }
                    </div>
                    </div>*/}
        </>
    );
}
 
export default ListaProductos;