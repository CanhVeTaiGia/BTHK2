import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export default function Bt2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Coca Cola",
    price: 1000,
    quantity: 10,
  });
  return (
    <>
      <h4>Thông tin sản phẩm</h4>
      <ul>
        <li>Id: {product.id}</li>
        <li>Name: {product.name}</li>
        <li>Price: {product.price}</li>
        <li>Quantity: {product.quantity} $</li>
      </ul>
    </>
  );
}
