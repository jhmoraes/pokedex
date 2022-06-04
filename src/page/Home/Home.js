import React, { useState, useEffect, useContext} from "react";
import Header from "../../components/Header/Header";
import CardsPokemon from "../../components/CardsPokemon/CardsPokemon";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import { HomeListContainer, HomeContainer } from './styled'


const Home = () => {

    const {pokemonList} = useContext(GlobalStateContext)    

    const renderPokeList = pokemonList.map((pokemon)=>{
       
        let color = ''
        switch (pokemon.types[0].type.name) {
            case 'water':
                color='blue'
            break;
            case 'fire':
                color='red'
            break;
            case 'bug':
                color='pink'
            break;
            case 'grass':
                color='green'
            break;
            case 'normal':
                color='yellow'
            break;
            case 'electric':
                color='#FF4500'
            break;
            case 'ground':
                color='#884513'
            break;
            case 'poison':
                color='#836fff'
            break;
            case 'fairy':
                color='#ff00ff'
            break;
            default:
                color='white'
            break;
        }
        
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