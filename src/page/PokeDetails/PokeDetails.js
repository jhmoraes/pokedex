import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import Header from "../../components/Header/Header";
import { PokeDatailsContainer, PokemonCardDetails } from './styled'

const PokeDetails = () => {

    const path = useParams()

    const { pokemonList } = useContext(GlobalStateContext)

    const pokemonDetails = pokemonList.find((pokeSpecific) => {
        return pokeSpecific.name === path.name
    })


    console.log(pokemonDetails)
    return (
        <>
            <Header />
            <PokeDatailsContainer>

                {pokemonDetails ?
                    <PokemonCardDetails>
                        <img src={pokemonDetails.sprites.other.dream_world.front_default} />
                        <ul>
                            <li>Nome: {pokemonDetails.name}</li>
                            <li>Tipo: {pokemonDetails.types[0].type.name}</li>
                            <li>Habilidade: {pokemonDetails.abilities[0].ability.name}</li>
                            <li>Height: {pokemonDetails.height}</li>
                            <li>Weight: {pokemonDetails.weight}</li>
                        </ul>
                    </PokemonCardDetails>

                : <p>Carregando...</p>}
            </PokeDatailsContainer>
        </>

    )
}

export default PokeDetails