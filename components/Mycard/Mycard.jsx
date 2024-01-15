import React from 'react'
import PropTypes from 'prop-types'
import './Mycard.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Image, { propTypes } from 'react-bootstrap/Image';

import Tags from '../Tags/Tags'

const Mycard = ({imagen,nombre,descripcion,color,raza}) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Img variant="top" src={imagen}/>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text className='cardText'>{descripcion}</Card.Text>
          <Card.Text><Tags color={color} text={raza} /></Card.Text>
        </Card.Body>
      </Card>
    </>
    );
}

Mycard.propTypes = {
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    color: PropTypes.string,
    raza: PropTypes.string
}

export default Mycard