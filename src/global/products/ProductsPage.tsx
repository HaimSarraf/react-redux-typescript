// import React, { FormEvent } from "react";
import Breads from "../../components/bread/Breads";
import Fruits from "../../components/fruit/Fruits";
import Meats from "../../components/meat/Meats";
// import { setCategory } from "../../container/category/categorySlice";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
import "./ProductsPage.scss";

const MainPage = () => {
  // const selectedProduct = useSelector(
  //   (category: RootState) => category.category.category
  // );

  // const dispatch = useDispatch();

  const defaultContent = (
    <div className="bottom">
      <div className="right">
        {/* <p className="categoryName">MEAT</p> */}
        <Meats />
      </div>
      <div className="center">
        {/* <p className="categoryName">BREAD</p> */}
        <Breads />
      </div>
      <div className="left">
        {/* <p className="categoryName">FRUIT</p> */}
        <Fruits />
      </div>
    </div>
  );

  // if (selectedProduct === "MEATS") {
  //   defaultContent = (
  //     <div className="wide">
  //       <p className="categoryName">MEAT</p>
  //       <Meats />
  //     </div>
  //   );
  // } else if (selectedProduct === "BREADS") {
  //   defaultContent = (
  //     <div className="wide">
  //       <p className="categoryName">BREAD</p>
  //       <Breads />
  //     </div>
  //   );
  // } else if (selectedProduct === "FRUITS") {
  //   defaultContent = (
  //     <div className="wide">
  //       <p className="categoryName">FRUIT</p>
  //       <Fruits />
  //     </div>
  //   );
  // }

  // const clickHandler = (e: FormEvent) => {
  //   e.preventDefault();
  //   dispatch(setCategory("ALL"));
  // };
  // const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   e.preventDefault();
  //   dispatch(setCategory(e.target.value));
  // };

  return (
    <div className="productsPage">
      <div className="wrapper">
        <div className="top">
          <div>
            {/* <form>
              <label>
                <select
                  name="choose some product"
                  value={selectedProduct}
                  onChange={changeHandler}
                >
                  <option className="option" value="ALL">
                    ALL
                  </option>
                  <option className="option1" value="MEATS">
                    MEAT
                  </option>
                  <option className="option2" value="BREADS">
                    BREADS
                  </option>
                  <option className="option3" value="FRUITS">
                    FRUITS
                  </option>
                </select>
              </label>
              <button onClick={clickHandler}>Show All Products</button>
            </form> */}
          </div>
        </div>
        {defaultContent}
      </div>
    </div>
  );
};

export default MainPage;
