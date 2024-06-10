import CartItems from "./CartItems";
import Modal from "../modal/Modal";
import { useModalStore } from "../container/modal/modalSlice";
import "./Cart.scss";
import { useProductStore } from "../container/product/useProductStore";

const Cart = () => {
  const { closeModal } = useModalStore();
  const { clearCart } = useProductStore();

  const cartItems = useProductStore((state) => state.cartItems);
  const totalPrice = useProductStore((state) => state.totalPrice);

  const hideModal = () => {
    closeModal();
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
          <button className="clearCart" onClick={() => clearCart()}>
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
