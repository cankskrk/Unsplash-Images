import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { UnsplashImage } from "../type";

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const url = `${import.meta.env.VITE_API_BASE_URL}/search/photos?client_id=${
    import.meta.env.VITE_API_CLIENT_ID
  }&query=${encodeURIComponent(searchValue)}`;

  console.log(url);

  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result?.data;
    },
  });

  if (response.isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section>
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results < 1) {
    return (
      <section>
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section>
      {results.map((item: UnsplashImage) => {
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item.alt_description} />;
      })}
    </section>
  );
};

export default Gallery;
