import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Home from "./home/Home";
import "./App.scss";

function App() {
  const isDarkTheme = useSelector((state: RootState) => state.darkTheme.dark);


  return (
    <div className={isDarkTheme?"dark" : "app"}>
      <Home />
    </div>
  );
}

export default App;
