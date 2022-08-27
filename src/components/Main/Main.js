import "./main.css";
import Home from "../Home/Home";
import Sub from "../Sub/Sub";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function Main(props) {
  const home = "/react-2021";
  const Films = lazy(() => import("../Films/Films"));
  const People = lazy(() => import("../People/People"));
  const Planets = lazy(() => import("../Planets/Planets"));
  const { keyword, setSearchState } = props;
  const { pathname } = useLocation();
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (async function () {
      if (pathname !== home) {
        let url = `https://swapi.dev/api${pathname}`;

        if (keyword.trim() !== "") {
          url += `?search=${keyword}`;
        }

        axios
          .get(url)
          .then((resp) => {
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
          .catch(console.error);
      }
    })();
  }, [keyword, pathname]);

  return (
    <div className="mainContent">
      <Routes>
        <Route
          path="/films/*"
          element={
            <Suspense fallback={<Spinner>Loading Films</Spinner>}>
              <Films list={films} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/people/*"
          element={
            <Suspense fallback={<Spinner>Loading People</Spinner>}>
              <People list={people} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/planets/*"
          element={
            <Suspense fallback={<Spinner>Loading Planets</Spinner>}>
              <Planets list={planets} setSearchState={setSearchState} />
            </Suspense>
          }
        />

        <Route
          exact
          path={home}
          element={
            <Home
              name={["C-3PO", "R2-D2"]}
              active={true}
              time={new Date() - 50000000}
              setSearchState={setSearchState}
            >
              <Sub />
              <Sub />
            </Home>
          }
        />
      </Routes>
    </div>
  );
}
