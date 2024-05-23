import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Modal from "../modal/Modal";
import { closeModal } from "../container/modal/modalSlice";
import { clearCart } from "../container/product/productSlice";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (products: RootState) => products.product.cartItems
  );
  
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
          <button className="clearCart" onClick={() => dispatch(clearCart())}>
            CLEAR CART
          </button>
          <br />
          <br />
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
