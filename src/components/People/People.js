import { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Person from '../Person/Person';
import './people.css';

export default function People(props) {
  const [list, setList] = useState([]);
  const {keyword, setSearchState} = props;

  useEffect(() => {
    let url = 'https://swapi.dev/api/people/';
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

  return (
    <>
    <div className="results">
      <h2>People List</h2>
      {list.length === 0 && <p>No people...</p>}
      {list.length > 0 && list.map((item, index) => (
        <p key={item.name}>
          <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`/people/${index + 1}`}>
            {item.name}
          </NavLink>
        </p>
      ))}
    </div>
      <div className="details">
        <Routes>
          <Route path=":id" element={<Person list={list} />} />
        </Routes>
      </div>
    </>
  );
}
