import React from 'react'
import styled from 'styled-components'
import { popularProducts } from "../data";
import Product from "./Product";

// flex - wrap--coz..display flex lay eutae line ma lamo banayera rakhya thyo sab product lai

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    // maping and calling product --if using any map...have to indicate unique key
  return (
    <Container>
    {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      
    </Container>
  )
}

export default Products
