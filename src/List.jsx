import React from 'react';
import './App.css';

function Fruits(props) {
    return <li>{props.fruit}</li>
}

function List() {
    const fruits = ["Apple", "Banana", "Grapes", "Orange"];

    return (
        <>
        <div className="fruitList">
            <h3>
                Fruits List
            </h3>
            {/* <h2>{new Date().toLocaleDateString()}</h2> */}

            <ul>
                {fruits.map(a => {
                    return <Fruits key={a} fruit={a} />
                }
                )}
            </ul>
            </div>
        </>
    );
}



export default List;