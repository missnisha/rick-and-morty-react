import React from 'react';
import { Link } from "react-router-dom";

const CardList = ({ page, results }) => {
  
let cardsDisplay;

if (results) {
 cardsDisplay = results.map( cardData => {
     const { id, name, image, status } = cardData;
     return (
      <Link
  
      to={`${id}`}
      key={id}
      
    >
       <div className="card">
         <div className="card__status">
           <p className={status === "Alive" ? "card__status--alive-badge" : status === "Dead" ? "card__status--dead-badge" : "card__status--unknown-bagde"}>
             {status}
           </p>
         </div>
         <div className="card__header">
           <img src={image} alt="" />
         </div>
         <div className="card__footer">
           <h4>{name}</h4>
           <p>View info</p>
         </div>
       </div>
       </Link>
     );
 });
} else {
 cardsDisplay = "No Characters Found"
}
  return (
    <>
      <div className="cards__list">
        <div className="cards__container">{cardsDisplay}</div>
      </div>
    </>
  );
};

export default CardList;
