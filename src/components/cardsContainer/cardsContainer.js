import React from "react";
import Card from "../card";

const CardsContainer = (props) => {

    return(
        <div className="container">
            <div className="row">
                {props.friends.map( (item, index) => (
                    <Card id={item.id} image={item.image} key={item.id} clicker={props.handlePick}  />
                ))}
             
            </div>
        </div>
    )
} 



export default CardsContainer;