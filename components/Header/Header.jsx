import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <header><h1>{props.nombre}</h1></header>
  )
}

Header.propTypes = {
    nombre: 'Nombre del titulo'
}

export default Header