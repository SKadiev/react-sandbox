import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
  width: 60%;
  margin: auto;
  border: 2px solid gray;
  box-shadow: 0 2px 3px #ccc;

  @media (min-width:500px) {
    width: 450px;
  }
`;

const person = (props) => {

  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '450px'
  //   }
  // }

  return (
      // <div className="Person" style={style}>
      <StyledDiv>
        
        <p >Im a {props.name} age : {props.age}
          <input onChange={props.change} value={props.name} />
        </p>
        <button onClick = {props.click } >Remove</button>

      </StyledDiv>

      
  )
}

export default person;