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
    text-shadow: 2px 2px 2px black;
    margin: 0 auto;
    height: 30px;
    `;
    const DeadTitleCard = styled.h2`
    font-size: 1.3em;
    color: #7e2c2c;
    text-shadow: 2px 2px 2px black;
    margin: 0 auto;;
    height: 30px;
    `;
    const StatusFilter = styled.div`
    width: 200px;
    height: 200px;
    margin-top: -30px;
    ${props => {
        if(props.className == 'Alive'){
            return '';
        }else
        if(props.className == 'Dead'){
            return 'background-color: rgba(255, 74, 74, 0.459)';
        }else
        if(props.className == 'Unknown'){
            return 'background-color: rgba(157, 157, 157, 0.6)';
        }
    }}
    `;

    return (
        <CharImage key={props.keyId}>
            {
                char.status == 'Dead' ? <DeadTitleCard>{char.name}</DeadTitleCard> : <TitleCard>{char.name}
                </TitleCard>
            }
            <StatusFilter className={char.status}></StatusFilter>
        </CharImage>
    )
}

export default ShowCards;