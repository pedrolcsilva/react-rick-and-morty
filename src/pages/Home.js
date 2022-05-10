import React from "react";
import {useState} from "react";
import ShowCards from '../Utils/List';
import styled from 'styled-components';

function Home(){
    const [chars, setChar] = useState("");
    let ep = React.createRef();

    function handleSearch(e){
        fetch(`https://rickandmortyapi.com/api/episode/${ep.current.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(!data.error){
                setChar(data.characters);
            }
        })
        .catch(error => console.log(error))
      }
    const ListTab = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    `;
    return (
        <div>
            <label>Digite um episódio de Rick and Morty:</label>
            <input type="text" ref={ep}/>
            <button onClick={handleSearch}>Buscar</button>
            <ListTab>
                {
                    chars.length > 0 ?
                    chars.map((char, index) => {
                        return <ShowCards url={char} keyId={index} />
                    })
                    : <p>Nenhum</p>
                }
            </ListTab>
        </div>
    );
}

export default Home;