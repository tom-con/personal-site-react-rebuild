import React from 'react';
import Quote from './QuoteComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import CallToAction from './CallToActionComponent';

export default function LandingContainer() {
  return (
    <main id="main">
      <div className="container">
        <Quote
          text="Happiness is not the endless pursuit of pleasant experiences - that sounds more like a recipe for exhaustion - but a way of being that results from cultivating a benevolent mind, emotional balance, inner freedom, inner peace and wisdom. Each of these qualities is a skill that can be enhanced through training the mind."
          author="Matthieu Ricard"
          url="http://www.matthieuricard.org/en/"
        />
        <Projects
          projects={[
            {
              title: 'VR File Explorer',
              blogUrl: 'https://www.tconchie.com/blog',
              img: 'https://s3.us-east-2.amazonaws.com/tconchie-assets/explorer.png',
              imgAlt: 'Screen Capture of VR File Explorer project.',
              deployUrl: 'https://www.tconchie.com/deployments',
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
        <CallToAction
          text={
            <p> Would you like to get in touch and <b>collab on something cool</b>?
          Or we can discuss a project you&apos;d like me to work on.
          Copy my email to your clipboard!
            </p>
        }
          callText="Copy Email"
          copyText="tconchie@gmail.com"
          copy
        />
      </div>
    </main>
  );
}
