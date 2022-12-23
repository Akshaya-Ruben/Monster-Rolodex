import React from 'react';
import {Monster} from "../../App"
import  Card  from '../card/card.component';

import './card-list.styles.css';


type CardListProp = {
  monsters : Monster[]
}
export const CardList = ({monsters} : CardListProp)   => (
  <div className='card-list'>
    {monsters.map((monster) => {
     return <Card key={monster.id} monster={monster} />
    })}
  </div>
);
