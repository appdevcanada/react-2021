import "./main.css";
import Home from "../Home/Home";
import Sub from "../Sub/Sub";
import useStarWars from "../../hooks/useStarWars";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";

export default function Main(props) {
  const home = "/react-2021";
  const Films = lazy(() => import("../Films/Films"));
  const People = lazy(() => import("../People/People"));
  const Planets = lazy(() => import("../Planets/Planets"));
  const { keyword, setSearchState } = props;
  const { pathname } = useLocation();
  const [films, setFilms] = useStarWars("films");
  const [people, setPeople] = useStarWars("people");
  const [planets, setPlanets] = useStarWars("planets");

  useEffect(() => {
    (async function () {
      if (pathname !== home) {
        switch (pathname) {
          case "/films":
            setFilms(keyword);
            break;

          case "/people":
            setPeople(keyword);
            break;

          case "/planets":
            setPlanets(keyword);
            break;

          default:
            break;
        }
      }
    })();
  }, [keyword, pathname, setFilms, setPeople, setPlanets]);

  return (
    <div className="mainContent">
      <Routes>
        <Route
          path="/films/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <Films list={films} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/people/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <People list={people} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/planets/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
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
