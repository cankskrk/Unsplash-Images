import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { searchValue, handleSearchValue } = useGlobalContext();

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
    <section>
      <h1>unsplash images</h1>
      <form className="" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" />
        <button>search</button>
      </form>

      <p>{searchValue}</p>
    </section>
  );
};

export default SearchForm;
