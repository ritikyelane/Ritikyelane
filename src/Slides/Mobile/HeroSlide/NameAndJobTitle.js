import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    text-shadow: 2px 2px 4px rgba(0,0,0,.3) ;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-weight : 600;
    height:50vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

const Name = styled.div`
  font-family: 'Mr Dafoe';
  text-align:center;
  padding-right: 10px;
  @media ${device.mobileS} {
    font-size: 55px;
  }
  @media ${device.mobileM} {
    font-size: 60px;
  }
  @media ${device.mobileL} {
    font-size: 63px;
  }
  @media ${device.tablet} {
    font-size: 150px;
  }
  @media ${device.laptop} {
    font-size: 170px;
  }
`;

const Title = styled.div`
  font-family: 'AvenirRoman';
  text-align:center;
  margin-top: 10px;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Name>Ritik Yelane</Name>
        <Title>PROGRAMMER & WEB-DEVELOPER</Title>
      </Container>
    );
  }
}

export default NameAndJobTitle;
