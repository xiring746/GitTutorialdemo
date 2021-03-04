import React from 'react';
import './card.styles.css';
export const Card = (props) => (
        <div className="card-container">
             <img alt="monster" className="imgsize" src={`https://robohash.org/${props.monster.id}?set=set2`} />
             <h1>{props.monster.name}</h1>
             <h6>{props.monster.email}</h6>
        </div>
)