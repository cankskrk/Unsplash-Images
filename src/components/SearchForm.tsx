const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;

    const searchValue = searchInput?.value;

    if (!searchValue) return;

    console.log(searchValue);

    searchInput.value = "";
  };

  return (
    <section>
      <h1>unsplash images</h1>
      <form className="" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" />
        <button>search</button>
      </form>
    </section>
  );
};

export default SearchForm;
