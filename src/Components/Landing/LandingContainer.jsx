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
              imgUrl: 'https://s3.us-east-2.amazonaws.com/tconchie-assets/explorer.png',
              imgAlt: 'Screen Capture of VR File Explorer project.',
              videoUrl: 'https://www.youtube.com/watch?v=LBcvrbGrTrA',
            },
          ]}
        />
        <Skills
          skills={[
          {
            icon: 'code',
            name: 'Front-end: Architecture + Implementation',
            description: 'I truly love programming in React, for me the declarative pattern, along with huge community support make it a quick choice for MVP and production apps alike. Particularly React+Redux+Sagas is probably my favorite front-end collab yet.',
          },
          {
            icon: 'road',
            name: 'Data Lifecycle: REST APIS + Database Models',
            description: 'A strong data model with supporting API design is one of the most satisfying components of building web apps. I always start my personal projects with detailed ERDs and then add API abstractions over top. You can\'t go wrong when you start from the bottom up.',
          },
          {
            icon: 'terminal',
            name: 'DevOps: Deployment + Containerization',
            description: 'The advent of containers for ease of development is more than upon us, and the spread of containerization to be a fundamental part of deployment has only just begun. Give me that Docker, Kubernetes, Elastic Container Service, etc.',
          },
          {
            icon: 'cubes',
            name: 'Fundamental Tinkerer: VR/AR, IoT, Scripting',
            description: 'I\'m excited by a lot of new tech, that\'s even truer when I get to play around with it on my own time. Right now I\'m loving the deep dive into embedded systems, especially with Elixir\'s Nerves framework.',
          },
        ]}
        />
        <CallToAction
          title="Copy my email to your clipboard!"
          icon="clipboard"
          text={
            <p>
              Would you like to get in touch and <b>collab on something cool</b>?
              Or we can discuss a project you&apos;d like me to work on.
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
