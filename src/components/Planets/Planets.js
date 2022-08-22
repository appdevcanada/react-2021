import { useState, useEffect } from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import Planet from '../Planet/Planet';
import './planets.css';

export default function Planets(props) {
  const [list, setList] = useState([]);
  const {keyword, setSearchState} = props;

  useEffect(() => {
    let url = 'https://swapi.dev/api/planets/';
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

  function findPlanet(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if(found) {
      return found;
    }
    return null;
  }
  return (
    <>
      <div className="results">
        <h2>Planet List</h2>

        {list.length === 0 && <p>No planets...</p>}
        {list.length > 0 && list.map((planet, index) => (
          <p key={planet.name}>
            <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`/planets/${index + 1}`}>
              {planet.name}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Routes>
          <Route path=":id" element={<Planet findPlanet={findPlanet} />} />
        </Routes>
      </div>
    </>
  );
}
