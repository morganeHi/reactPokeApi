import React from "react"

export const Pokemon = ({url}) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(p=> setData(p))
        .catch(e => console.log(e))
    }, [])

    return (
        <>  
            <div className="pokeDiv">
                <h2>{data.id} ~ {data.name}</h2>
                <img src={data.sprites?.other.home.front_default} onClick={event =>  window.location.href=`/${data.name}`}/>
            </div>
        </>
    )
}

