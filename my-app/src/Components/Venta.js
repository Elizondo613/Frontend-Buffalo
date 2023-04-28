import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './Formulario';

export default function Inventario() {
  const [historial, setHistorial] = useState([])

  // eslint-disable-next-line
  const [inUpdated, setInUpdated] = useState(false)
 
  useEffect(() => {
    const getHistorial = () => {
        fetch('http://localhost:4000/api/historial')
        .then(res => res.json())
        .then(data=>{
            setHistorial(data)
          })
    }
    getHistorial()

  },[])

  //FUNCIÓN PARA ELIMINAR UN PRODUCTO
  const handleDelete = idhistorial => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:4000/api/historial/' + idhistorial, requestInit)
    .then(res => res.text()) 
    .then(res => console.log(res))

    setInUpdated(true)
  }

  return (
    <Fragment>
    <div className='row'>
      <Formulario/>
      {
        historial.map((item, index) => (
          <div className="col-md-4"  >
          <Card className='mt-2' key={index} style={{ width: '350px' }}>
          <Card.Body>
            <Card.Title>{item.Nombre}</Card.Title>
            <Card.Text>
            <h6>Precio vendido:</h6>
              {item.Precio}
            </Card.Text>
            <Card.Text>
            <h6>Cantidad:</h6> 
            {item.Cantidad}
            </Card.Text>
            <button onClick={() => handleDelete(item.idhistorial)} setInUpdated={setInUpdated} className='btn btn-danger'>Borrar</button>
          </Card.Body>
        </Card>
        </div>
        ))
        
      }
      </div>
    </Fragment>
  )
}