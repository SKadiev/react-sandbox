import React from 'react';
import Person from '../Persons/Person/Person'


const Persons = (props) => props.persons.map((person, index) => {
    return (<h1 key={person.id}> 
        <Person 
            click = {() => {props.clicked(index)}}
            change = {(event) => {props.changed(event, person.id)}} 
            name = {person.name} age={person.age}  />
    </h1>);
})

export default Persons;