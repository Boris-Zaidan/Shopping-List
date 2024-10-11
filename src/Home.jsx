import React, { useRef, useState } from "react";
import { v4 } from "uuid";

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
    <div className="container">
      <h1 className="title">Shopping List</h1>
      <input placeholder="Products..." ref={inputRef} />
      <button className="btnadd" onClick={addProduct}>
        To Add
      </button>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <p className="list">{product.name}</p>
          <button className="btndel" onClick={() => delProduct(product.id)}>
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
