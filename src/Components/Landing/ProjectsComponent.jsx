import React from 'react';
import PropTypes from 'prop-types';

ProjectsComponent.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ProjectsComponent({ projects }) {
  return (
    <div className="row section recentworks topspace">

      <h2 className="section-title"><span>Recent Works</span></h2>

      <div className="thumbnails recentworks row">
        {
            projects.map(p =>
                (
                  <div key={p.title} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a className="thumbnail" href={p.blogUrl}>
                      <span className="img">
                        <img src={p.img} alt={p.imgAlt} />
                        <span className="cover"><span className="more">See details &rarr;</span></span>
                      </span>
                      <span className="title">{p.title}</span>
                    </a>
                    <span className="details">
                      <a href={p.deployUrl}>Deployment</a> | <a href={p.videoUrl}>Video</a>
                    </span>
                    <p />
                  </div>
                ))
        }
      </div>

    </div>
  );
}
