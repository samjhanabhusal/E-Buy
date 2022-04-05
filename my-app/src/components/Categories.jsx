import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  

`;
// ---categoris---clothes,,,electrical--orr ll
// maping--have to pass..unique key--here if
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        // as prop--itemm
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
