import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import Header from "../../components/Header/Header";
import { PokeDatailsContainer, PokemonCardDetails, ButtonBack } from './styled'
import {goToHome} from '../../routers/Coordinator'
import { useNavigate } from "react-router-dom";

const PokeDetails = () => {

    const path = useParams()
    const navigate = useNavigate()

    const { pokemonList, colorPokemon } = useContext(GlobalStateContext)

    const pokemonDetails = pokemonList.find((pokeSpecific) => {
        return pokeSpecific.name === path.name
    })

    let color

    if(pokemonDetails){
        color = colorPokemon(pokemonDetails.types[0].type.name)
    }
    console.log('color', color)

    return (
        <>
            <Header />
            <ButtonBack onClick={() => goToHome(navigate)}>Voltar</ButtonBack>
            <PokeDatailsContainer>                
                {pokemonDetails ?
                    <PokemonCardDetails color={color}>
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