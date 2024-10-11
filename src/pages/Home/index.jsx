import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import { Container, AddButton, Product, TrashButton } from "./style";

function Home() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef();

  const addProduct = (e) => {
    e.preventDefault();
    setProducts([{ id: v4(), name: inputRef.current.value }, ...products]);
    inputRef.current.value = "";
  };

  const delProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    console.log("Produto deletado com sucesso!");
  };

  return (
    <Container>
      <h1>Shopping List</h1>

      <input placeholder="Products..." ref={inputRef} />
      <AddButton onClick={addProduct}>Add</AddButton>

      {products.map((product) => (
        <Product className="product" key={product.id}>
          <p className="list">{product.name}</p>
          <TrashButton
            className="btndel"
            onClick={() => delProduct(product.id)}
          >
            🗑️
          </TrashButton>
        </Product>
      ))}
    </Container>
  );
}

export default Home;
