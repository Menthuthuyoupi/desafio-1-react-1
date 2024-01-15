import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import perroUno from './imgs/perroUno.jpg'
import perroDos from './imgs/perroDos.jpg'
import perroTres from './imgs/perroTres.jpg'
import perroCuatro from './imgs/perroCuatro.jpg'
import perroCinco from './imgs/perroCinco.jpg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/Header/Header'
import Mycard from '../components/Mycard/Mycard'
import Footer from '../components/Footer/Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







function App() {
  return (
    <>
      <Header nombre='Adopta a un perrito'/>
      <Container>
        <Row>
          <Col><Mycard imagen={perroUno} nombre='Gustavo' descripcion="Perro bien peresoso, encontrando a un dueño que lo cuide y lo alimente." color={'primary'} raza='beagle' /></Col>
          <Col><Mycard imagen={perroDos} nombre='Rene' descripcion="Perro bien Jugueton, encontrando a un dueño que lo cuide y lo alimente." color='success' raza="galgo" /></Col>
          <Col><Mycard imagen={perroTres} nombre='Daniel' descripcion="Perro bien cariñoso, encontrando a un dueño que lo cuide y lo alimente." color='danger' raza="bulldog" /></Col>      
        </Row>
        <Row>
          <Col><Mycard imagen={perroCuatro} nombre='Javier' descripcion="Perro bien  inquieto, encontrando a un dueño que lo cuide y lo alimente." color='dark' raza="bulldog" /></Col>
          <Col><Mycard imagen={perroCinco} nombre='nicolas' descripcion="perro bien comilon, encontrando a un dueño que lo cuide y lo alimente." color='info' raza="galgo" /> </Col>
          <Col></Col>        
        </Row>
      </Container>

      <Footer footerDescripcion='Se ayuda a perros perdidos a encontrar dueños quien los cuide'/>
    </>
  )
}

export default App
