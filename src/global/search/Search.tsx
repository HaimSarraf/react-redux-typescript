import { Refresh, SearchRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../container/product/productSlice";
import { RootState } from "../../store/store";
import "./Search.scss";

function Search() {
  const products = useSelector((state: RootState) => state.product.products);
  const reset = useSelector(
    (state: RootState) => state.product.searchedProducts
  );

  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    

    const searchValue = e.target.value;

    

    if (searchValue !== "") {
      const searchedProduct = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue)
      );

      dispatch(searchProducts(searchedProduct));
    } else {
      dispatch(searchProducts(reset));
    }
  };

  const clickHandler = () => {
    dispatch(searchProducts(reset));

    document.querySelector("input")!.value = "";
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <button className="left-button" onClick={clickHandler}>
        <Refresh />
      </button>
      <input
        id="input"
        type="search"
        className="input"
        placeholder="🔍"
        onChange={handleSearch}
      />
      <button className="right-button" disabled>
        <SearchRounded />
      </button>
    </form>
  );
}

export default Search;
