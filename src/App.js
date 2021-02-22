import React, {  Component } from 'react';
import './App.css';
import Person from  './Person/Person';
import styled from 'styled-components';

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

    const StyledButton =  styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font : inherit;
      border : 1px solid white;
      padding: 8px;
      cursor : pointer;
      &:hover  {
        background-color :  ${props => props.alt ? 'salmon' : 'lightgreen'};
        color : black;
      };
    `;
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font : 'inherit',
      border : '1px solid white',
      padding: '8px',
      cursor : "pointer",
      ':hover' : {
        backgroundColor : 'lightGreen',
        color: 'black',
        
      }
    }

    if ( this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<h1 key={person.id}> <Person click = {() => {this.removePersonHandler(index)}} change = {(event) => {this.newNameHandler(event, person.id)}} name = {person.name} age={person.age}   /></h1>);
          })}
        
        </div> 

      );

      buttonStyle.backgroundColor = 'red';
      
      buttonStyle[ ':hover' ] = {
        backgroundColor : 'salmon',
        color: 'black',
      
      }
    }

    let classes = [ 'align'];

    if (this.state.persons.length <=2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('bold');
    }
    
    return (

      <div className="App">
        <div>
        <h1 className='align'>React app</h1>
        <p className={classes.join(' ')}>This is working</p>
        <StyledButton onClick = {this.tooglePersonHandler} alt = {this.state.showPersons}>Click me</StyledButton>
        </div>
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
