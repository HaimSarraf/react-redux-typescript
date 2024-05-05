import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/productSlice";
import "./Breads.scss";

const Breads = () => {
  const allProducts = useSelector((state: RootState) => state.product.products);

  const selectedProducts = allProducts.filter(
    (product) => product.category === "bread"
  );

  const dispatch = useDispatch();

  return (
    <div>
      {selectedProducts.map((product) => (
        <div className="products" key={product.id}>
          <div className="container">
            <div className="product">
              <p>{product.title.toUpperCase()}</p>
              <img src={product.src} alt={product.title} />
              <p>{product.price}$</p>
              <div className="buttons">
                <div className="topButtons">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantity(product.id));
                    }}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(increaseQuantity(product.id));
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="bottomButtons">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product.id));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breads;
