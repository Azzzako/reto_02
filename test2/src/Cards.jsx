import React from "react";

const Cards = ({definitions}) => {

    // console.log(definitions);
    return (
        <>
        {definitions?.map( (def, index) => {
            return (
                <ul key={index}>
                    <li>{def.definition}</li>
                </ul>
            )
        })}
        </>
    )
}


export default Cards
