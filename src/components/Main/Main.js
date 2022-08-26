import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import Films from '../Films/Films';
import People from '../People/People';
import Planets from '../Planets/Planets';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Main(props) {
  const { keyword, setSearchState } = props;
  const { pathname } = useLocation();
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (async function () {
      if (pathname !== "/") {
        let url = `https://swapi.dev/api${pathname}`;

        if(keyword.trim() !== "") {
          url += `?search=${keyword}`;
        }

        axios.get(url)
          .then(resp => {
            let data = resp.data;
            switch (pathname) {
              case "/films":
                setFilms(data.results);
                break;

              case "/people":
                setPeople(data.results);
                break;

              case "/planets":
                setPlanets(data.results);
                break;

              default:
                break;
            }
          })
          .catch(console.error)
      }
    })();
  }, [keyword, pathname])

  return (
    <div className="mainContent">
      <Routes>
        <Route path="/films/*" element={<Films list={films} setSearchState={setSearchState} />} />
        <Route path="/people/*" element={<People list={people} setSearchState={setSearchState} />} />
        <Route path="/planets/*" element={<Planets list={planets} setSearchState={setSearchState} />} />

        <Route
          exact
          path="/"
          element={<Home name={['C-3PO', 'R2-D2']} active={true} time={new Date() - 50000000} setSearchState={setSearchState}>
                <Sub />
                <Sub />
              </Home>} />
      </Routes>
    </div>
  );
}
