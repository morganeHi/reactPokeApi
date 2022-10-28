import React from "react"

import { Pokemon } from "../components/pokemon";
import { Search } from "./Search";

export const Home = () => {

    const [pokemons, setPokemons] = React.useState([]);
    const [search, setSearch] = React.useState('');             


    React.useEffect(() => {
        console.log('pass')
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(err => console.log(err))
    }, []) 


    return (
        <>
            <h1>Poké Home</h1>
            <Search  search={search} setSearch={setSearch}/>
            <div className="pokeAll">
                {pokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
                .map((s, index) => <Pokemon key={index} url={s.url}/>)}
            </div>
        </>
    )
}