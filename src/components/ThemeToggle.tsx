import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="flex justify-end">
      <button
        className={
          isDarkTheme
            ? "p-2 rounded-md text-white hover:text-sky-200"
            : "p-2 rounded-md text-black hover:text-yellow-400"
        }
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <i className="fa-solid fa-moon text-3xl"></i>
        ) : (
          <i className="fa-solid fa-sun text-3xl"></i>
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
