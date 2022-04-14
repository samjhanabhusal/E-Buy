import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
// flex - wrap--coz..display flex lay eutae line ma lamo banayera rakhya thyo sab product lai

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  // ffetching data
  // first useState--define products 
  const [products, setProducts] = useState([]);
  
  // if any filter change("size, color, price") then fetch accordingly
  const [filteredProducts, setFilteredProducts] = useState([]);
// when cat changes...render..call this function getProduct
//of category fetch accordingly, if not fetch all produts
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        // updating products
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  // filter object from array in js
  useEffect(() => {
    cat &&
      setFilteredProducts(
        // filter and check each item and check each key and value(color: Yellow)
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
          // match them with product item
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // sort
  useEffect(() => {
    if (sort === "newest") {
      // taking prev item and making array and compating two items
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
     // maping and calling product --if using any map...have to indicate unique key
    //  cat condition vayena vanay home ko product haraxa if no filtered products
    <Container>
    
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

