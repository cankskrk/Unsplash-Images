import "./App.css";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { useGlobalContext } from "./context/context";

function App() {
  const { searchValue } = useGlobalContext();

  const darkTheme = JSON.parse(localStorage.getItem("darkTheme") || "false");
  return (
    <div
      className={`flex flex-col items-center min-h-screen transition-colors duration-500 ease-in-out ${
        darkTheme ? "bg-stone-950" : "bg-stone-50"
      }`}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="mt-16">
        <SearchForm />
      </div>
      <div>{searchValue && <Gallery />}</div>
    </div>
  );
}

export default App;
