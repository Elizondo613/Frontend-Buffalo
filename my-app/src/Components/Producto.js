import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ProductoNuevo () {

  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpProducto = {
      Nombre: event.target.inputNombre.value,
      Descripcion: event.target.inputDescripcion.value,
      Stock: event.target.inputStock.value,
      Precio_Venta: event.target.inputPrecioVenta.value,
      Precio_Compra: event.target.inputPrecioCompra.value,
      Imagen: event.target.inputImagen.value
    }
    
    BAPI(tmpProducto)

    formRef.current.reset()
  }

  const BAPI = (producto) => {

    fetch("http://localhost:4000/api/producto", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1>Producto nuevo</h1>
      {
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Descripcion..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputPrecioVenta">
                <Form.Label>Precio venta</Form.Label>
                <Form.Control type="number" placeholder="PrecioVenta..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputPrecioCompra">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="number" placeholder="PrecioCompra..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputImagen">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control type="text" placeholder="Imagen url..." />
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