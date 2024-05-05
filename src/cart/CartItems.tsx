import { CartItemType } from "../types/types";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../store/productSlice";
import { increaseCartQuantity,decreaseCartQuantity } from "../store/productSlice";
import "./CartItem.scss";

const CartItems = ({ id, src, title, price, quantity }: CartItemType) => {

  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="container">
        <img src={src} alt={title} />
        <div className="details">
          {/* <h5>{title}</h5> */}
          <div className="items">
            <button
              className="minus"
              onClick={() => dispatch(decreaseCartQuantity(id))}
            >
              –
            </button>

            <h4>
              <span>PRICE : {"   "}</span>
              {quantity} * {price} $
            </h4>

            <button
              className="add"
              onClick={() => dispatch(increaseCartQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="remove"
          onClick={() => dispatch(removeProductFromCart(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
