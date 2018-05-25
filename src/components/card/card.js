import React from "react";

const styles = {
    width: "100%",
    margin: "auto",
    height: "100%",
    padding: ".5em"

}

const Card = (props) => {
 
    return(
        <div className="col-md-2 card m-1 animated lightSpeedIn" style={{height:"200px", width:"200px"}}>
    
            <img onClick={props.clicker.bind(this, props.id)} className="img-fluid" alt="" src={props.image} style={styles}/>
        </div>
    )
}


export default Card;