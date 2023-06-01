import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'AI Assistance',
        projectDesc: 'Virtual Assistant uses advanced Artificial Intelligence (AI),natural language processing to extract information from conversations and process them accordingly.',
        projectType: 'AI-JARVIS',
        roles: ['Full Stack Developer', 'AI'],
      },
      {
        number: '02',
        projectName: 'WhatsMyFood',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat.',
        projectType: '',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      {
        number: '03',
        projectName: 'Weather App',
        projectDesc: 'Weather forecast app provides detailed local & world wide forecast, it provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to zone.',
        projectType: 'WEATHERIO',
        roles: ['Front-end Developer', 'Native-Js'],
      },
      {
        number: '04',
        projectName: 'Real Chat-Box',
        projectDesc: 'A real time chat,it is a way of communication and interaction in real time on the Internet as one person. This communication is based on text messages.',
        projectType: 'APP CONCEPT',
        roles: ['UI Designer'],
      },
      {
        number: '05',
        projectName: 'Video portal',
        projectDesc: 'Internal video portal to deliver news to employees all over the world.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer', 'UI Designer'],
      },
      {
        number: '06',
        projectName: 'PortFolio',
        projectDesc: 'An online portfolio is an online representation of work you have created, as well as your skills and experiences. It could be a website, blog channel.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer', 'UI Designer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
