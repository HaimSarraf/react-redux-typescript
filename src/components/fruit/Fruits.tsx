import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../container/product/productSlice";
// import "./Fruits.scss";

const Fruits = () => {
  const allProducts = useSelector((state: RootState) => state.product.products);
  const cartItems = useSelector((state: RootState) => state.product.cartItems);
  const isDarkTheme = useSelector((state: RootState) => state.darkTheme.dark);


  const selectedCartItems = cartItems.filter(
    (product) => product.category === "fruit"
  );

  const selectedProducts = allProducts.filter(
    (product) => product.category === "fruit"
  );

  const dispatch = useDispatch();

  return (
    <div>
      {selectedProducts.map((product) => (
        <div className={isDarkTheme?"dark":"products"} key={product.id}>
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
                  {selectedCartItems.find((item) => item.id === product.id) ? (
                    <p>
                      {
                        selectedCartItems.find((item) => item.id === product.id)
                          ?.quantity
                      }
                    </p>
                  ) : (
                    <p>{product.quantity}</p>
                  )}
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

export default Fruits;
