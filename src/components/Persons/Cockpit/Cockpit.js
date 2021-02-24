import React from 'react';

const Cockpit = (props) => {

    let assignClasses = [ 'align'];

    if (this.state.persons.length <=2) {
      assignClasses.push(classes.red);
    }

    if (this.state.persons.length <=1) {
      assignClasses.push(classes.bold);
    }
    

    return (<div>
        <h1 className='align'>React app</h1>
        <p className={props.assignClasses.join(' ')}>This is working</p>
        <button className={props.btnClasses.join(' ')} onClick = {props.tooglePersonHandler} >Click me</button>
    </div>
    )
}

export default Cockpit;