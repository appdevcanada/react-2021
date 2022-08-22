import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Person({ list }) {
  const [found, setFound] = useState(false);
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let person = list.find((item, index) => parseInt(id) === index + 1);
    if(person) {
      setPerson(person);
      setFound(true);
    }
  },[found, id, list])

  return (
    <div>
    {found &&
      <div>
        <h2>Person Details {id}</h2>
        {person && <p>{person.name}</p>}
        {person && <p>{person.birth_year}</p>}
      </div>
    }
    </div>
  );
}
