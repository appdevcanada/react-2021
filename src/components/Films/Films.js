import { Route, NavLink, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Film from "../Film/Film";
import Spinner from "../Spinner/Spinner";
import { useFav } from "../../context/FavContext";
import "./films.css";

export default function Films(props) {
  const [fav] = useFav();
  const { list, setSearchState } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(setLoaded, 800, true);
  }, [list]);

  useEffect(() => {
    setSearchState(false);
  });

  function findFilm(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if (found) {
      return found;
    }
    return null;
  }

  return (
    <>
      <div className="results">
        <h2>Film List</h2>
        {!loaded && <Spinner>Loading...</Spinner>}
        {list.length === 0 && <p>No films...</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to={`/films/${index + 1}`}
            >
              {film.title}&nbsp;
              {fav.type === "films" && index + 1 === parseInt(fav.id) && (
                <>
                  <span className="material-icons small-font">favorite</span>
                </>
              )}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Routes>
          <Route path=":id" element={<Film findFilm={findFilm} />} />
        </Routes>
      </div>
    </>
  );
}
