import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={product.image} style={{ width:"100px", height:"130px" }}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">Add to Card</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
