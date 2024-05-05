import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/modalSlice";
import { RootState } from "../../store/store";
import "./Navbar.scss";

const Navbar = () => {
  const cartIsVisible = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  const toggleCart = () => {
    if (cartIsVisible) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <StorefrontIcon />
        </div>
        <div className="center">
          <FavoriteIcon />
          <p>Healthy Products For You</p>
        </div>
        <div className="right">
          <ShoppingCartIcon onClick={toggleCart} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
