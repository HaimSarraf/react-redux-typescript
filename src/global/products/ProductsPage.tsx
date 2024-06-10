import React, {  useState } from "react";
import Breads from "../../components/bread/Breads";
import Fruits from "../../components/fruit/Fruits";
import Meats from "../../components/meat/Meats";
import { useCategoryStore } from "../../container/category/categorySlice";
import { category } from "../../types/types";
import "./ProductsPage.scss";

const MainPage = () => {
  const { setCategory } = useCategoryStore();
  const selectedCategory = useCategoryStore((state) => state.category);

  let defaultContent = (
    <div className="bottom">
      <div className="right">
        <Meats />
      </div>
      <div className="center">
        <Breads />
      </div>
      <div className="left">
        <Fruits />
      </div>
    </div>
  );

  const categoryMap: Record<string, category> = {
    ALL: category.ALL,
    MEATS: category.MEATS,
    BREADS: category.BREADS,
    FRUITS: category.FRUITS,
  };

  if (selectedCategory === categoryMap["MEATS"]) {
    defaultContent = (
      <div className="wide">
        <Meats />
      </div>
    );
  } else if (selectedCategory === categoryMap["BREADS"]) {
    defaultContent = (
      <div className="wide">
        <Breads />
      </div>
    );
  } else if (selectedCategory === categoryMap["FRUITS"]) {
    defaultContent = (
      <div className="wide">
        <Fruits />
      </div>
    );
  }

  const [cat, setCat] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const stringValue = e.target.value;
    const correctValue = categoryMap[stringValue];

    setCategory(correctValue);
    setCat(stringValue);
  };

  const clickHandler = () => {
    setCategory(category.ALL);
    setCat("ALL");
  };


  return (
    <div className="productsPage">
      <div className="wrapper">
        <div className="top">
          <div>
            <form>
              <label>
                <select
                  name="choose some product"
                  value={cat}
                  onChange={changeHandler}
                >
                  <option className="option" value="ALL">
                    ALL
                  </option>
                  <option className="option1" value="MEATS">
                    MEATS
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
            </form>
          </div>
        </div>
        {defaultContent}
      </div>
    </div>
  );
};

export default MainPage;
