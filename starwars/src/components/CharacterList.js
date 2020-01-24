import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';



function CharacterList() {
const [data, setData] = useState([]);
  
useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(response => {
    console.log(response.data.results);
    setData(response.data.results);
  })
  .catch( err => {
    console.log("Nothing to Display!", err);
  })
}, []);

return (
    <div className='toon'>
        {data.map(toon => {
            return (
            <CharacterCard 
                key={toon.id}
                name={toon.name}
                birth={toon.birth_year}
                eye={toon.eye_color}
                gender={toon.gender}
                hair={toon.hair_color}
                mass={toon.mass}
                height={toon.height}
            />
           );
        })}
    </div>
  );
}

export default CharacterList;