import { AvForm, AvField, AvGroup, AvInput} from "availity-reactstrap-validation";
import {Label, Button} from 'reactstrap';

const FormularioProductos = () => {
    return ( 
        <>
            <h1 className="mb-3"> NUEVO PRODUCTO</h1>
            <AvForm>
                <AvGroup className="mb-3">
                    <AvField name = "nombre" label = "Nombre" required/>
                </AvGroup>
                <AvGroup check className="mb-3">
                    <AvInput type = "checkbox" name = "completado"/>
                    <Label check for = "completado">COMPLETADO</Label>
                </AvGroup>
                <div className="text-end">
                    <Button color="primary">Guardar</Button>
                </div>
            </AvForm>
        </>
     );
}
 
export default FormularioProductos;