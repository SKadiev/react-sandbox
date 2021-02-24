import React from 'react';
import classes from  './Person.css';

const Person = (props) => {

 

  return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        
        <p >Im a {props.name} age : {props.age}
          <input onChange={props.change} value={props.name} />
        </p>
        <button onClick = {props.click } >Remove</button>

      </div>

      
  )
}

export default Person;