import React, { Component } from 'react';
import Quote from './QuoteComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import explorer from '../../img/explorer.png';


export default class LandingContainer extends Component {
  render() {
    return (
      <span>
        <Quote
          text="Happiness is not the endless pursuit of pleasant experiences - that sounds more like a recipe for exhaustion - but a way of being that results from cultivating a benevolent mind, emotional balance, inner freedom, inner peace and wisdom. Each of these qualities is a skill that can be enhanced through training the mind."
          author="Matthieu Ricard"
          url="http://www.matthieuricard.org/en/"
        />
        <Projects
          projects={[
            {
              title: 'VR File Explorer',
              blogUrl: 'www.tconchie.com',
              img: explorer,
              imgAlt: 'Screen Capture of VR File Explorer project.',
              deployUrl: 'www.tconchie.com',
              videoUrl: 'https://www.youtube.com/watch?v=LBcvrbGrTrA',
            },
          ]}
        />
        <Skills
          skills={[
          {
            name: 'Front-end Architecture w/React',
            description: 'I truly love programming in React, for me its declarative nature, along with huge community support make it a quick choice for small and production apps alike.',
            url: 'www.google.com',
          },
          {
            name: 'API Design and Implementation',
            description: 'I truly love programming in React, for me its declarative nature, along with huge community support make it a quick choice for small and production apps alike.',
            url: 'www.google.com',
          },
        ]}
        />
      </span>
    );
  }
}
