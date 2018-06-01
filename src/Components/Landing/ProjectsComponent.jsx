import React from 'react';
import PropTypes from 'prop-types';

import Project from './ProjectComponent';

ProjectsComponent.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ProjectsComponent({ projects }) {
  return (
    <div className="row section recentworks topspace">
      <h2 className="section-title"><span>Recent Works</span></h2>
      <div className="thumbnails recentworks row">
        {
            projects.map((p, i) =>
              (<Project
                key={p.title}
                idx={i}
                {...p}
              />))
        }
      </div>

    </div>
  );
}
