import React, { useState, useEffect, useContext} from "react";
import Header from "../../components/Header/Header";
import CardsPokemon from "../../components/CardsPokemon/CardsPokemon";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import { HomeListContainer, HomeContainer } from './styled'


const Home = () => {

    const {pokemonList, colorPokemon } = useContext(GlobalStateContext)    

    const renderPokeList = pokemonList.map((pokemon)=>{

        let color = colorPokemon(pokemon.types[0].type.name)
    
        return <CardsPokemon color={color} pokemon={pokemon}/>
        
    })

    return (
        <HomeContainer>
            <Header />
            <HomeListContainer>
                {renderPokeList.length ? renderPokeList : <p> Carregando...</p>}
            </HomeListContainer>
        </HomeContainer>
    )
}

export default Home