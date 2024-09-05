import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../utils/axiosPreset";

export function useSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const { query, category } = useParams();  // Get the search query or category from the URL params
  const location = useLocation();           // Get the current location to determine the route
  const [searchParams, setSearchParams] = useState(""); // Prevent duplicate fetches


  useEffect(() => {
    const fetchMovies = async (url, params = {}) => {
      setLoading(true);
      const { data } = await api.get(url, { params });
      if (page > 1) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]); // Append results for pagination
      } else {
        setMovies(data.results); // Replace results for new search
      }
      setLoading(false);
    };

    // Check the route and fetch data accordingly
    if (location.pathname.includes("/search")) {
      if (query !== searchParams || page > 1) {
        fetchMovies('search/movie', { query, page });
        setSearchParams(query);
      }
    } else if (location.pathname.includes("/trending")) {
      fetchMovies('trending/movie/day', { page });
    } else if (location.pathname.includes("/category")) {
      fetchMovies('discover/movie', { with_genres: category, page });
    }

  }, [query, category, location.pathname, page]);

  return { page, setPage, movies, loading };
}