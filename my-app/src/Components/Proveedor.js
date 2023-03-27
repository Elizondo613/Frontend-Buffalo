import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ProveedorNuevo () {

  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpProveedor = {
      Nombre: event.target.inputNombre.value,
      Direccion: event.target.inputDireccion.value,
      Telefono: event.target.inputTelefono.value
    }
    
    BAPI(tmpProveedor)

    formRef.current.reset()
  }

  const BAPI = (proveedor) => {

    fetch("http://localhost:4000/api/proveedor", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(proveedor)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1>Proveedor nuevo</h1>
      {
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Dirección..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono..." />
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