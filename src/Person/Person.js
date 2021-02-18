import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">

        <p >Im a {props.name} age : {props.age}
          <input onChange={props.change} value={props.name} />
        </p>
        <button onClick = {props.click } >Remove</button>

        </div>
       
    )
}

export default person;