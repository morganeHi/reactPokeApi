import React from 'react';
import { useParams } from "react-router-dom"

export const Details = () => {

  const params = useParams();

  const [details, setDetails] = React.useState({});

  React.useEffect(() => {  
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    .then(res => res.json())
    .then(data=> setDetails(data))
    .catch(e => console.log(e))
}, [])

 return (
  <>
    <div className='cardDiv'>
      <h1 >{details.name}</h1>
      <img src={details.sprites?.other.home.front_default}/>
      <ul>
        <li>weight : {details.weight}</li>
        <li>height : {details.height}</li>
      </ul>
    </div>
  </>
 )
}