import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/BASE_URL";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    const [allPokemon, setAllPokemon] = useState([])
    const [pokeName, setPokeName] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        getAllPokemon()
    }, [])

    useEffect(() => {
        const listName = []
        const arrayPokemons = []

        const fetch = async () => {

            for (let pokemon of allPokemon) {
                listName.push(pokemon.name)
                const { data } = await axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
                arrayPokemons.push(data)

            }

            setPokeName(listName)
            setPokemonList(arrayPokemons)
        }

        fetch()

    }, [allPokemon])

    const getAllPokemon = () => {

        axios.get(`${BASE_URL}/pokemon?limit=50`)
            .then((resp) => {
                setAllPokemon(resp.data.results)

            })
            .catch((err) => { console.log(err) })
    }


    const data = { pokeName, setPokeName, pokemonList, setPokemonList }



    return (
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState