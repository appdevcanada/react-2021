import { Route, NavLink, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Film from '../Film/Film';
import './films.css';

export default function Films(props) {
  const [list, setList] = useState([]);
  const {keyword, setSearchState} = props;

  useEffect(() => {
    let url = 'https://swapi.dev/api/films/';
    if(keyword.trim() !== "") {
      url += `?search=${keyword}`;
    }
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        setList(data.results);
      })
      .catch(console.warn);
  }, [keyword]);

  useEffect(() => {
    setSearchState(false);
  })

  function findFilm(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if(found) {
      return found;
    }
    return null;
  }
  return (
    <>
      <div className="results">
        <h2>Film List</h2>

        {list.length === 0 && <p>No films...</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`/films/${index + 1}`}>
              {film.title}
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
