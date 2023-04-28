import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Formulario () {

  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpHistorial = {
      Nombre: event.target.inputNombre.value,
      Precio: event.target.inputPrecio.value,
      Cantidad: event.target.inputCantidad.value
    }
    
    BAPI(tmpHistorial)

    formRef.current.reset()
  }

  const BAPI = (historial) => {

    fetch("http://localhost:4000/api/historial", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(historial)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1>Producto vendido</h1>
      {
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputPrecio">
                <Form.Label>Precio vendido</Form.Label>
                <Form.Control type="number" placeholder="Precio..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputCantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" placeholder="Cantidad..." />
              </Form.Group>
            </div>
            <div className='row justify-content-center mt-3'>
              <Button variant="primary" className='col-3' type="submit">
                Registrar
              </Button>
            </div>
          </Form>
      }
    </>

  )
}