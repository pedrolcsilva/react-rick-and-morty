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

    const PageLayout = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const TextArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    font-weight: 600;
    line-height: 1.3em;
    padding: 5px 0px
    `;
    const ListTab = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    `;
    const InputBar = styled.input`
    border-radius: 5px;
    `;
    const ButtonSearch = styled.button`
    font-weight: 600;
    color: rgb(20, 98, 35);
    background-color: rgb(102, 231, 0);
    border: none;
    padding: 4px;
    border-radius: 5px;
    &:hover {
        color: white;
        background-color: rgb(102, 231, 0, 0.8);
      }
    `;
    const Title = styled.header`
    font-size: 1.2em;
    font-weight: 600;
    margin: 5px auto;
    text-decoration: underline 2px green;
    color: green
    `;
    const TextLabel = styled.label`
    color: rgb(88, 88, 88);
    `;
    return (
        <PageLayout>
            <Title>Rick and Morty API</Title>
            <TextArea>
                <TextLabel>Escolha um episódio:</TextLabel>
                <InputBar type="number" min="1" max="51" defaultValue={0} ref={ep}/>
                <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
            </TextArea>
            <ListTab>
                {
                    chars.length > 0 ?
                    chars.map((char, index) => {
                        return <ShowCards url={char} keyId={index} />
                    })
                    : <p>Nenhum</p>
                }
            </ListTab>
        </PageLayout>
    );
}

export default Home;