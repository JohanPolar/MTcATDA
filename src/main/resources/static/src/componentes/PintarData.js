import React from "react";

const PintarData = ({productos}) =>  {

    const datosProductos = productos.map(productos =>{
        return (
            <tr>
                <td className="text-center">{productos.name}</td>
                <td className="text-center">{productos.category}</td>
                {productos.availability ?
                <td className="text-center">Si</td>
                :
                <td className="text-center">No</td>
                }
                <td className="text-center">{productos.price}</td>
                <td className="text-center">{productos.stock}</td>
                <td className="text-center">{productos.description}</td>
            </tr>
        )
    });
    return ( 
        <tbody>
            {datosProductos}
        </tbody>
     );
}
 
export default PintarData;