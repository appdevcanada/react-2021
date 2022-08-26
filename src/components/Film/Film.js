import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFav } from '../../context/FavContext';

export default function Film({ findFilm }) {
  const [film, setFilm] = useState(null);
  const { id } = useParams();
  const [fav, updateFav] = useFav();

  function favClicked(ev) {
    updateFav('films', parseInt(id), film);
  }

  useEffect(() => {
    setFilm(findFilm(id));
  }, [findFilm, id]);

  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );

  return (
    <>
      <h2>Film Details</h2>
      {details}
      <p><button onClick={favClicked}>Set <span className="material-icons small-font">favorite</span></button></p>
    </>
  );
}
