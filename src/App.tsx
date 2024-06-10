import { useDarkThemeStore } from "./container/dark-theme/darkThemeSlice";
import Home from "./home/Home";
import "./App.scss";

function App() {
  const  dark  = useDarkThemeStore(state=>state.dark);

  return (
    <div className={dark ? "dark" : "app"}>
      <Home />
    </div>
  );
}

export default App;
