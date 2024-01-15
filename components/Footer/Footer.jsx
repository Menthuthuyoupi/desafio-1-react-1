import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer= props => {
  return (
    <>
    <footer>
        <Container>
            <Row><p>{props.footerDescripcion}</p></Row>
        </Container>
    </footer>
    </>
  )
}

Footer.propTypes = {
    nombre: 'breve descripcion'
}

export default Footer