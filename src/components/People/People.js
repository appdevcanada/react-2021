import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Person from "../Person/Person";
import Spinner from "../Spinner/Spinner";
import { useFav } from "../../context/FavContext";
import "./people.css";

export default function People(props) {
  const [fav] = useFav();
  const { list, setSearchState } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(setLoaded, 800, true);
  }, [list]);

  useEffect(() => {
    setSearchState(false);
  });

  function findPerson(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if (found) {
      return found;
    }
    return null;
  }
  return (
    <>
      <div className="results">
        <h2>People List</h2>
        {!loaded && <Spinner>Loading...</Spinner>}
        {list.length === 0 && <p>No people...</p>}
        {list.length > 0 &&
          list.map((item, index) => (
            <p key={item.name}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={`/people/${index + 1}`}
              >
                {item.name}&nbsp;
                {fav.type === "people" && index + 1 === parseInt(fav.id) && (
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
          <Route path=":id" element={<Person findPerson={findPerson} />} />
        </Routes>
      </div>
    </>
  );
}
