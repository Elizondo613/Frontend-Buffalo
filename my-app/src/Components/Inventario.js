import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, Fragment } from 'react';

export default function Inventario() {
  const [producto, setProducto] = useState([])

  // eslint-disable-next-line
  const [inUpdated, setInUpdated] = useState(false)
 
  useEffect(() => {
    const getProducto = () => {
        fetch('http://localhost:4000/api/producto')
        .then(res => res.json())
        .then(data=>{
            setProducto(data)
          })
    }
    getProducto()

  },[])

  //FUNCIÓN PARA ELIMINAR UN PRODUCTO
  const handleDelete = idproducto => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:4000/api/producto/' + idproducto, requestInit)
    .then(res => res.text()) 
    .then(res => console.log(res))

    setInUpdated(true)
  }

  //FUNCIÓN PARA ACTUALIZAR UN PRODUCTO
  let {Nombre, Descripcion, Stock, Precio_Venta, Precio_Compra, Imagen} = producto

  // eslint-disable-next-line
  const handleUpdate = idproducto => {
    //validación de los datos
    if (Nombre === '' || Descripcion === '' || Stock <= 0 || Precio_Venta <= 0 || Precio_Compra <= 0 || Imagen === '') {
        alert('Todos los campos son obligatorios')
        return
    }

    const requestInit = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(producto)
    }
    fetch('http://localhost:4000/api/producto/' + idproducto, requestInit)
    .then(res => res.text()) 
    .then(res => console.log(res))
  }

  return (
    <Fragment>
    <div className='row'>
      {
        producto.map((item, index) => (
          <div className="col-md-4"  >
          <Card className='mt-2' key={index} style={{ width: '350px' }}>
          <Card.Img variant="top" src={item.Imagen}/>
          <Card.Body>
            <Card.Title>{item.Nombre}</Card.Title>
            <Card.Text>
              {item.Descripcion}
            </Card.Text>
            <Card.Text>
            <h6>Existencia:</h6> 
            {item.Stock}
            </Card.Text>
            <button onClick={() => handleDelete(item.idproducto)} setInUpdated={setInUpdated} className='btn btn-danger'>Borrar</button>
          </Card.Body>
        </Card>
        </div>
        ))
        
      }
      </div>
    </Fragment>
  )
}