import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props){
    console.log(props)
    return(
        <div>
            Pokedex.js
            <Pokemon
                saveName={props.saveName}
                releasePokemon={props.releasePokemon} 
            />
        </div>
    )
}

export default Pokedex