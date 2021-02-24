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

    let  btnClasses = [classes.Button];

    if ( this.state.showPersons) {
      persons = (
        <div>
          {/* {this.state.persons.map((person, index) => {
            return (<h1 key={person.id}> <Person click = {() => {this.removePersonHandler(index)}} change = {(event) => {this.newNameHandler(event, person.id)}} name = {person.name} age={person.age}   /></h1>);
          })} */}
        <Persons 
         persons={this.state.persons}  clicked = {this.removePersonHandler} change = {this.newNameHandler} />
        </div> 

      );
      btnClasses.push(classes.Red);

    
    }

    let assignClasses = [ 'align'];

    if (this.state.persons.length <=2) {
      assignClasses.push(classes.red);
    }

    if (this.state.persons.length <=1) {
      assignClasses.push(classes.bold);
    }
    

    return (

      <div className={classes.App}>
          <Cockpit    
            assignClasses = {assignClasses}
            btnClasses = {btnClasses}
            tooglePersonHandler = {this.tooglePersonHandler}
          />
        {/* {  this.state.showPersons  ? 
        
          <div>
            <h1> <Person click = {this.changePerson.bind(this, 'pero')} name={this.state.persons[0].name} age={this.state.persons[0].age} /></h1>
            <h1> <Person change = {this.newNameHandler} name = {this.state.persons[1].name} age={this.state.persons[1].age} /></h1>
          </div> 
          
          : null
        }  */}
        {persons}
      </div>
  
      // React.createElement('div', {className : 'App'} , React.createElement('h1', null , <Person name = "tote" age="25" />))
    )
  }

}


  
export default App;
