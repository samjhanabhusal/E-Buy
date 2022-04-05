import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'


const Container = styled.div``

const ProductList = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Products/>
    </Container>
  )
}

export default ProductList;
