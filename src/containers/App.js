import React, {  Component } from 'react';
import classes from './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from  '../components/Persons/Persons';
import Cockpit from  '../components/Persons/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { 
        id : 'dasdasd',
        name: 'tote',
        age: '29'
      },
  
      { 
        id :'dasdassssd',
        name: 'koce',
        age: '55'
      },

      { 
        id :'asd',
        name: 'doce ',
        age: '55'
      }
    ],
  
    showPersons: false
  }

   tooglePersonHandler = () => {
     const doesShow = !this.state.showPersons; 
    this.setState({
     
      showPersons:  doesShow
    })
  }


   newNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => id === p.id);

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({persons : persons});
  }

  removePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons})
  }



  render () {

    let persons = null;

    if ( this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}  clicked = {this.removePersonHandler} changed = {this.newNameHandler} />
        </div> 

      );

    }

    return (

      <div className={classes.App}>
          <Cockpit 
             persons = {this.state.persons}  
             showPersons = {this.state.showPersons}   
            clicked = {this.tooglePersonHandler}
          />
        {persons}
      </div>
  
    )
  }

}


  
export default App;
