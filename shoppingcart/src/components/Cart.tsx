import { Table, Button } from 'react-bootstrap';

type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imgUrl: string;
  value: number;
};

type Props = {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
};

export default function Cart(props: Props) {
  const {cart} = props;
  const {updateQuantity} = props;
  const {removeFromCart} = props;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <h3>Your Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0? cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price} USD</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '60px' }}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          )): <tr><td colSpan={5}>Chưa có sản phẩm trong giở hàng</td></tr>}
        </tbody>
      </Table>
      <h4>Total: {total} USD</h4>
    </div>
  )
}
