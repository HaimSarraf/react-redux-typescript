import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkMode from "@mui/icons-material/DarkMode";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../container/modal/modalSlice";
import { setDark, setLight } from "../../container/dark-theme/darkThemeSlice";
import { RootState } from "../../store/store";
import "./Navbar.scss";
import { LightMode } from "@mui/icons-material";
import Search from "../search/Search";

const Navbar = () => {
  const cartIsVisible = useSelector((state: RootState) => state.modal.isOpen);

  const isDarkTheme = useSelector((state: RootState) => state.darkTheme.dark);

  const totalAmount = useSelector((state: RootState) => state.product.amount);

  const dispatch = useDispatch();

  const toggleCart = () => {
    if (cartIsVisible) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };

  const toggleTheme = () => {
    if (isDarkTheme) {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {isDarkTheme ? (
            <LightMode onClick={toggleTheme} />
          ) : (
            <DarkMode onClick={toggleTheme} />
          )}
        </div>
        <div className="center">
          <div className="search-box">
            <Search />
          </div>
        </div>
        <div className="right">
          <button className="totalAmount">{totalAmount}</button>
          <ShoppingCartIcon onClick={toggleCart} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
