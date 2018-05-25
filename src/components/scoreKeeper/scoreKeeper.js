import React from "react"

const ulStyle = {
    width: "50%",
    padding: "0",
    listStyle: "none"
}

const ScoreKeeper= (props) => (
    <div className="text-center mx-auto w-50 card my-3">
        <h3>Score Card</h3>
        <ul className="mx-auto d-flex justify-content-around" style={ulStyle}>
            <li className="d-inline-block badge badge-pill badge-primary">Current Score: {props.score}</li>
            <li className="d-inline-block badge badge-pill badge-primary">Max Score: {props.max}</li>
        </ul>
    </div>
)
export default ScoreKeeper;