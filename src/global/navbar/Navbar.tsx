import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkMode from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LightMode } from "@mui/icons-material";
import { useDarkThemeStore } from "../../container/dark-theme/darkThemeSlice";
import { useModalStore } from "../../container/modal/modalSlice";
import { useProductStore } from "../../container/product/useProductStore";
import "./Navbar.scss";

const Navbar = () => {
  const { openModal, closeModal } = useModalStore();

  const isOpen = useModalStore((state) => state.isOpen);

  const { setDark, setLight } = useDarkThemeStore();

  const dark = useDarkThemeStore((state) => state.dark);

  const totalAmount = useProductStore(state=>state.amount)

  const toggleCart = () => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const toggleTheme = () => {
    if (!dark) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {dark ? (
            <LightMode onClick={toggleTheme} />
          ) : (
            <DarkMode onClick={toggleTheme} />
          )}
        </div>
        <div className="center">
          <FavoriteIcon />
          <p>Healthy Products For You</p>
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
