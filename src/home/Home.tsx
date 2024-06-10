import Footer from "../global/footer/Footer";
import Navbar from "../global/navbar/Navbar";
import ProductsPage from "../global/products/ProductsPage";
import Cart from "../cart/Cart";
import { useModalStore } from "../container/modal/modalSlice";
import "./Home.scss";


const Home = () => {

  const isOpen = useModalStore(state=>state.isOpen)

  return (
    <div className="home">
      <div className="up">
        <Navbar />
      </div>
      <div className="center">
        <div className="cart">{isOpen && <Cart />}</div>
        <ProductsPage />
      </div>
      <div className="down">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
