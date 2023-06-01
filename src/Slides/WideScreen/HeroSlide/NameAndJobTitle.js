import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    text-shadow: 2px 2px 4px rgba(0,0,0,.52);
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    font-weight : 600;
    width:100%;
    background-color: white;
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      
      <Container>
        <NameReveal text="Ritik Yelane" fontFam="Mr Dafoe" timeDelay={500}/> 
        <br/>
        <TitleReveal text="PROGRAMMER & WEB-DEVELOPER" fontFam="AvenirRoman" timeDelay={1300} />
      </Container>
    );
  }
}

export default NameAndJobTitle;
