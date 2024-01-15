import React from 'react'
import PropTypes from 'prop-types'
import './Tags.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'

const Tags = ({color, text}) => {

    switch(color){
        case 'primary':
            return <Badge bg='primary' className='aviso'>{text}</Badge>;
        case 'secundary':
            return <Badge bg='secondary' className='aviso'>{text}</Badge>;
        case 'success':
            return <Badge bg='success' className='aviso'>{text}</Badge>;
        case 'danger':
            return <Badge bg='danger' className='aviso'>{text}</Badge>;
        case 'warning':
            return <Badge bg='warning' className='aviso'>{text}</Badge>;
        case 'info':
            return <Badge bg='info' className='aviso'>{text}</Badge>;
        case 'light':
            return <Badge bg='light' className='aviso'>{text}</Badge>;
        default:
            return <Badge bg='dark' className='aviso'>{text}</Badge>;
    }         
}

Tags.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

Tags.defaultProp = {
    color: 'primary',
    text: 'texto'
}

export default Tags