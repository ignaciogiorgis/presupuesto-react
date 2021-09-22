import React, {Fragment, useState} from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //funcion que leer el presupuesto

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value) );
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        // validar
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }
        

        // si se pasa la validacion 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }


    return (
      <Fragment> 
          <h2>Coloca tu presupuesto</h2>
          {error ? <Error mensaje="El presupuesto es Incorrecto" />  : null}
          <form onSubmit={agregarPresupuesto} >
                <input
                    type="number"
                    placeholder="Coloca tu presupuesto"
                    className="u-full-width" 
                    onChange={definirPresupuesto}               
                />
                <input
                    type="submit"
                    className=" button-primary u-full-width "
                    value="Definir el presupuesto"
                />
          </form>
      </Fragment>
      );
}
 
export default Pregunta;