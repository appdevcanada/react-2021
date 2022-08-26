import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFav } from "../../context/FavContext";

export default function Person({ findPerson }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const [fav, updateFav] = useFav();

  function favClicked(ev) {
    if (fav.id === parseInt(id) && fav.type === "people") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("people", parseInt(id), person);
  }

  useEffect(() => {
    setPerson(findPerson(id));
  }, [findPerson, id]);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
      <p>
        <button onClick={favClicked}>
          Set <span className="material-icons small-font">favorite</span>
        </button>
      </p>
    </div>
  );
}
