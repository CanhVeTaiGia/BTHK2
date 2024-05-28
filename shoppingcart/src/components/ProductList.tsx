import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imgUrl: string;
  value: number;
}

type Props = {
  products: Product[];
  addToCart: (product: Product) => void;
};

export default function ProductList(props: Props) {
  const { products } = props;
  const { addToCart } = props;
  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products));
  // }, products);
  return (
    <div className="flex gap-[10px] flex-wrap">
      {products.map((product) => (
        <Card key={product.id} className="mb-3 w-[200px]">
          <Card.Img variant="top" src={product.imgUrl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <input
              type="text"
              value={product.quantity}
              className="outline-none pl-[10px] rounded-[2px] mt-[10px] mb-[10px] ml-[60px] w-[40px] border-black border-[1px]"
            />
            {product.quantity > 0 ? (
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart ({product.price} USD)
              </Button>
            ) : (
              <Button variant="secondary">
                Add to Cart ({product.price} USD)
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
