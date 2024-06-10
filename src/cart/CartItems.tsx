import { useProductStore } from "../container/product/useProductStore";
import { CartItemType } from "../types/types";
import "./CartItem.scss";

const CartItems = ({ id, src, title, price, quantity }: CartItemType) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeProductFromCart } =
    useProductStore();

  return (
    <div className="cartItem">
      <div className="container">
        <img src={src} alt={title} />
        <div className="details">
          {/* <h5>{title}</h5> */}
          <div className="items">
            <button className="minus" onClick={() => decreaseCartQuantity(id)}>
              –
            </button>

            <h4>
              <div style={{ fontSize: "8px", color: "grey" }}>
                ({quantity} x {price}$){" "}
              </div>
              {quantity * price}$
            </h4>

            <button className="add" onClick={() => increaseCartQuantity(id)}>
              +
            </button>
          </div>
        </div>
        <button className="remove" onClick={() => removeProductFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
