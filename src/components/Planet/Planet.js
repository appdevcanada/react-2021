import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFav } from "../../context/FavContext";

export default function Planet({ findPlanet }) {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();
  const [, , favPlanet, updateFav] = useFav();

  function favClicked(ev) {
    if (favPlanet.id === parseInt(id) && favPlanet.type === "planets") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("planets", parseInt(id), planet);
  }

  useEffect(() => {
    setPlanet(findPlanet(id));
  }, [findPlanet, id]);

  let details = (
    <>
      <p>{planet && planet.name}</p>
      <p>{planet && planet.terrain}</p>
    </>
  );

  return (
    <>
      <h2>Planet Details</h2>
      {details}
      <p>
        <button onClick={favClicked}>
          Set{" "}
          <span className="material-icons small-font red-font">favorite</span>
        </button>
      </p>
    </>
  );
}
