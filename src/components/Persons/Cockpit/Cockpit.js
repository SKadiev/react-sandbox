import React from 'react';
import classes from  './Cockpit.css';

const Cockpit = (props) => {
    let  btnClasses = [classes.Button];
    let assignClasses = [ 'align'];

    if (props.persons.length <=2) {
      assignClasses.push(classes.red);
    }

    if (props.persons.length <=1) {
      assignClasses.push(classes.bold);
    }
    
    if ( props.showPersons) {
        btnClasses.push(classes.Red);
    }


    return (<div className={classes.Cockpit}>
        <h1 className='align'>React app</h1>
        <p className={assignClasses.join(' ')}>This is working</p>
        <button className={btnClasses.join(' ')} onClick = {props.clicked} >Click me</button>
    </div>
    )
}

export default Cockpit;