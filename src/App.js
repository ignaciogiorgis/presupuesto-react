import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


    
function App() {
  const [presupuesto, guardarPresuepuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState([{

  }]);
  const [crearGasto, guardarCreacrGasto] = useState(false)

  //useEffect que actualiza el restante

  useEffect(()=>{
    if(crearGasto){
      guardarGastos(
        [...gastos, gasto]
      )

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCreacrGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante]);

  //cuando agregamos un nuevo gasto

 
  return (
    <div className="container">
      <header>
          <h1>Gasto Semanal </h1>

            <div className="contenido-principal contenido">
              { mostrarpregunta ? (  
              <Pregunta
                   guardarPresupuesto={guardarPresuepuesto}
                   guardarRestante={guardarRestante}
                   actualizarPregunta={actualizarPregunta}
                 /> ) : (
                  <div className="row" >
                      <div className="one-half column">
                        <Formulario
                          guardarGasto={guardarGasto}
                          guardarCreacrGasto={guardarCreacrGasto}
                        />
                      </div>
                      <div className="one-half column">
                        <Listado
                          gastos={gastos}
                        />
                        <ControlPresupuesto
                            presupuesto={presupuesto}
                            restante={restante}
                        />
                      </div>
                  </div>
                  ) }
                             
            </div>
        </header>
    </div>      
  );
}

export default App;
