import React from 'react';
import { NewDiv } from './styling'

const CharacterCard = props => {
    return (
    
        <NewDiv className='characterList'>
            <h2>Character Name: {props.name}</h2>
            <p>{props.name} was born in {props.birth} and is a {props.gender}.  {props.name} is {props.height}cm tall, weighting {props.mass}kg, has {props.eye} colored eyes and {props.hair} hair. </p>
        </NewDiv>
       
    )
}

export default CharacterCard;