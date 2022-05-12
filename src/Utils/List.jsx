import React from "react";
import {useEffect, useState} from "react";
import styled from 'styled-components';

function ShowCards(props){

    const [char, setChar] = useState("");

    useEffect(()=>{
        console.log(props)
        fetch(props.url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setChar({
                name: data.name,
                image: data.image,
                status: data.status
            })
        })
        .catch(error => {
            console.log(error);
        })


    }, [props]);
    
    const CharImage = styled.li`
    width: 200px;
    background-size: cover;
    background-repeat: norepeat;
    height: 200px;
    background-image: url(${char.image});
    list-style-type: none;
    border-radius:15px;
    box-shadow: 1px 1px 5px black;
    overflow: hidden;
    `;
    const TitleCard = styled.h2`
    font-size: 1.3em;
    color: #CCF3EE;
    text-shadow: 1px 1px 2px black;
    `;
    const StatusFilter = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props => {
        if(props.className == 'Alive'){
            return 'none';
        }else
        if(props.className == 'Dead'){
            return 'rgba(255, 74, 74, 0.459)';
        }else
        if(props.className == 'Unknown'){
            return 'rgba(157, 157, 157, 0.6)';
        }
    }}
    `;

    return (
        <CharImage key={props.keyId}>
            <StatusFilter className={char.status}></StatusFilter>
            <TitleCard>{char.name}</TitleCard>
        </CharImage>
    )
}

export default ShowCards;