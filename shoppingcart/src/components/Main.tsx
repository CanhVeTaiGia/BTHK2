import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import Alert from "react-bootstrap/Alert";

// localStorage.setItem(
//   "products",
//   JSON.stringify([
//     {
//       id: 1,
//       name: "Pizza",
//       price: 30,
//       description: "Delicious pizza",
//       imgUrl: "./src/assets/imgs/pizza.jpg",
//       quantity: 10,
//     },
//     {
//       id: 2,
//       name: "Hamburger",
//       price: 15,
//       description: "Tasty hamburger",
//       imgUrl: "./src/assets/imgs/Hamburger.jpg",
//       quantity: 15,
//     },
//     {
//       id: 3,
//       name: "Bread",
//       price: 20,
//       description: "Fresh bread",
//       imgUrl: "./src/assets/imgs/bread.jpg",
//       quantity: 11,
//     },
//     {
//       id: 4,
//       name: "Cake",
//       price: 10,
//       description: "Yummy cake",
//       imgUrl: "./src/assets/imgs/Cake.jpg",
//       quantity: 16,
//     },
//   ])
// );

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imgUrl: string;
  value: number;
}
export default function Main() {
  const [addSuccess, setAddSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSucccess] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(() => {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  });
  const [cart, setCart] = useState<Product[]>(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });
  const addToCart = (product: Product) => {
    setAddSuccess(true);
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setProducts(
        products.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setProducts([...products, {...product, quantity: product.quantity - 1}])
    }
    setTimeout(() => {
      setAddSuccess(false);
    }, 1000);
  };
  const updateQuantity = (id: number, quantity: number) => {
    setUpdateSucccess(true);
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }
        return item;
      })
    );
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - (quantity || 0) };
        } else {
          return { ...item };
        }
      })
    );
    setTimeout(() => {
      setUpdateSucccess(false);
    }, 1000);
  };
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  useEffect(() => {
    cart.map((item) => {
      if (item.quantity < 1) {
        return (item.quantity = 1);
      }
    });
    products.map((item) => {
      if (item.quantity < 0) {
        return (item.quantity = 0);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  return (
    <Container>
      {addSuccess ? (
        <Modal addSuccess={addSuccess} updateSuccess={updateSuccess} />
      ) : (
        ""
      )}
      <Row>
        <Col md={6}>
          <h2>List Products</h2>
          <ProductList products={products} addToCart={addToCart} />
        </Col>
        <Col md={6}>
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </Col>
      </Row>
    </Container>
  );
}
