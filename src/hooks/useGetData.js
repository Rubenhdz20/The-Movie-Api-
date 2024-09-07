import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/axiosPreset";

// fetch data from an API, manage pagination, and handle loading states. 

export function useGetData(url) {
    const [dataMovies, setDataMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const axiosData = async (url) => {
            const { data } = await api.get(url, {
                params: {
                    page: page,
                },
            }); // Sends a GET request to the provided URL, with pagination and session ID as query parameters.

            if(data.results) {
                if(id === categoryId && page > 1) {
                    setDataMovies([...dataMovies, ...data.results]); // appends new results to the existing dataMovies array.
                } else {
                    setDataMovies(data.results);// it assumes data contains the entire dataset.
                    setPage(1);
                }
            } else {
                setDataMovies(data);
            }
            setCategoryId(id);// Updates categoryId with the current id for future comparisons.
            setLoading(false);
        };
        axiosData(url);
    }, [page, id]); // Runs the effect when page or id changes. This effect is responsible for fetching data.
    return { page, setPage, dataMovies, loading };
}