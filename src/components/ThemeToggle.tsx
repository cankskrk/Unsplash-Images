import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="flex justify-end">
      <button
        className={
          isDarkTheme
            ? "p-2 rounded-md text-yellow-200 hover:text-yellow-300"
            : "p-2 rounded-md text-sky-200 hover:text-sky-300"
        }
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <i className="fa-solid fa-sun text-3xl"></i>
        ) : (
          <i className="fa-solid fa-moon text-3xl"></i>
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
