import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { searchValue, handleSearchValue } = useGlobalContext();

  const darkTheme = JSON.parse(localStorage.getItem("darkTheme") || "false");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;

    const searchInputValue = searchInput?.value;

    if (!searchInputValue) return;
    handleSearchValue(searchInputValue);
    searchInput.value = "";
  };

  return (
    <section
      className={`max-w-2xl mx-auto p-6 shadow-lg rounded-lg transition ${
        darkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-4">Unsplash Images</h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative w-full">
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10 transition ${
              darkTheme
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            }`}
            type="text"
            name="search"
            placeholder="Search..."
          />
          <svg
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition ${
              darkTheme ? "text-gray-400" : "text-gray-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded-lg transition ${
            darkTheme
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Search
        </button>
      </form>

      {searchValue && (
        <p className="mt-4 transition">
          <span className="font-semibold">Search Value:</span> {searchValue}
        </p>
      )}
    </section>
  );
};

export default SearchForm;
