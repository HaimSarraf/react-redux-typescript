import { useDarkThemeStore } from "../../container/dark-theme/darkThemeSlice";
import { useProductStore } from "../../container/product/useProductStore";
// import "./Fruits.scss";

const Fruits = () => {
  const { increaseQuantity, decreaseQuantity, addToCart } = useProductStore();
  const allProducts = useProductStore((state) => state.products);
  const cartItems = useProductStore((state) => state.cartItems);

  const dark = useDarkThemeStore((state) => state.dark);

  const selectedCartItems = cartItems.filter(
    (product) => product.category === "fruit"
  );

  const selectedProducts = allProducts.filter(
    (product) => product.category === "fruit"
  );

  return (
    <div>
      {selectedProducts.map((product) => (
        <div className={dark ? "dark" : "products"} key={product.id}>
          <div className="container">
            <div className="product">
              <p>{product.title.toUpperCase()}</p>
              <img src={product.src} alt={product.title} />
              <p>{product.price}$</p>
              <div className="buttons">
                <div className="topButtons">
                  <button
                    onClick={() => {
                      decreaseQuantity(product.id);
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
                      increaseQuantity(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="bottomButtons">
                  <button
                    onClick={() => {
                      addToCart(product.id);
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
