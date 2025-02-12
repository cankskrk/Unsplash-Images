import "./App.css";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { useGlobalContext } from "./context/context";

function App() {
  const { searchValue } = useGlobalContext();

  const darkTheme = JSON.parse(localStorage.getItem("darkTheme") || "false");
  console.log(darkTheme);
  return (
    <div
      className={`h-screen min-h-screen transition-colors duration-500 ease-in-out ${
        darkTheme ? "bg-stone-950" : "bg-stone-50"
      }`}
    >
      <ThemeToggle />
      <SearchForm />

      {searchValue && <Gallery />}
    </div>
  );
}

export default App;
