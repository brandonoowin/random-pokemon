import React from 'react'

function PokemonButton({name, onClick}) {
    return <button className="myButton" onClick={onClick}>{name}</button>
}

export default PokemonButton;