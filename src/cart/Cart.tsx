import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Modal from "../modal/Modal";
import { closeModal } from "../store/modalSlice";
import { clearCart } from "../store/productSlice";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store: RootState) => store.product.cartItems);
  const total = useSelector((store:RootState)=>store.product.cartItems)

  let totalPrice = 0 

  total.forEach(item=> totalPrice += item.quantity * item.price)

  const hideModal = () => {
    dispatch(closeModal());
  };

  if (cartItems.length < 1) {
    return (
      <Modal onClose={hideModal}>
        <div className="emptyCart">
          <h2>Your Bag</h2>
          <h4>is currently Empty</h4>
          <button onClick={() => hideModal()}>x</button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={hideModal}>
      <div className="fullCart">
        <div className="title">
          <h2>Cart</h2>
          <h3 onClick={() => hideModal()}>x</h3>
        </div>
        <div>
          {cartItems.map((product) => {
            return <CartItems key={product.id} {...product} />;
          })}
        </div>
        <div>
          <h5>Total Price : {totalPrice}</h5>
        </div>
        <div>
          <button className="clearCart" onClick={() => dispatch(clearCart())}>
            CLEAR CART
          </button>
          <br />
          <br />
          {/* <button onClick={() => hideModal()}>close cart</button> */}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
