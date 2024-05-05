import Footer from "../global/footer/Footer";
import Navbar from "../global/navbar/Navbar";
import ProductsPage from "../global/products/ProductsPage";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import "./Home.scss";

const Home = () => {
  const cartIsVisible = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div className="home">
      <div className="up">
        <Navbar />
      </div>
      <div className="center">
        <div className="cart">{cartIsVisible && <Cart />}</div>
        <ProductsPage />
      </div>
      <div className="down">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
