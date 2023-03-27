import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';

export default function Inventario() {
  const [producto, setProducto] = useState([])

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

  const handleDelete = idproducto => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:4000/api/producto/' + idproducto, requestInit)
    .then(res => res.text()) 
    .then(res => console.log(res))
  }

  return (
    <>
    <div className='row'>
      {
        producto.map((item, index) => (
          <div className="col-md-4"  >
          <Card className='mt-2' key={index} style={{ width: '350px' }}>
          <Card.Img variant="top" src={item.Imagen}/>
          <Card.Body>
            <Card.Title>{item.idproducto}</Card.Title>
            <Card.Text>
              {item.Descripcion}
            </Card.Text>
            <Card.Text>
            <h6>Existencia:</h6> 
            {item.Stock}
            </Card.Text>
            <button onClick={() => handleDelete(item.idproducto)} className='btn btn-danger'>Borrar</button>
          </Card.Body>
        </Card>
        </div>
        ))
        
      }
      </div>
    </>
  )
}