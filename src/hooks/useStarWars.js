import { useState, useEffect } from "react";
import axios from "axios";

export default function useStarWars(category) {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");

  axios.defaults.baseURL = "https://swapi.dev/api";

  useEffect(() => {
    axios
      .get(category, { params: { search: keyword }, timeout: 4000 })
      .then((response) => {
        setList(response.data.results);
      })
      .catch(console.error);
  }, [category, setList, keyword]);

  return [list, setKeyword];
}
