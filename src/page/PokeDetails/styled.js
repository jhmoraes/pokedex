import styled from "styled-components";


export const PokeDatailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export const PokemonCardDetails = styled.div`

    width: 25vw;
    height: 60vh;
    background-color: #ffff;
    border: 10px solid ${props => props.color};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    img{
        height: 40vh;
        position: relative;
        bottom: 5rem;
        
    }
    
`

export const ButtonBack = styled.div`
    margin: 1.5em 0 0 5em;
    background-color: red;
    border-radius: 30px;
    width: 6vw;
    height: 9vh;
    cursor: pointer;
`


