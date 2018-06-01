import React from 'react';
import PropTypes from 'prop-types';

ProjectTileComponent.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  deployUrl: PropTypes.string,
  githubUrl: PropTypes.string,
};

ProjectTileComponent.defaultProps = {
  imgUrl: '',
  imgAlt: 'No image available for this project',
  videoUrl: '',
  deployUrl: '',
  githubUrl: 'https://github.com/tom-con',
};

export default function ProjectTileComponent({
  title, tagline, description, imgUrl, imgAlt, videoUrl, deployUrl, githubUrl,
}) {
  return (
    <div className="col-4">
      <a className="thumbnail" href={videoUrl}>
        <span className="img">
          <img src={imgUrl} alt={imgAlt} />
          <span className="cover"><span className="more">See video &rarr;</span></span>
        </span>
        <span className="title">{title}</span><br /><span> {tagline}</span>
      </a>
      <span className="details"><a href={deployUrl}>Deployment</a> | <a href={githubUrl}>Github</a></span>
      <h4 />
      <p>{description}</p>
    </div>
  );
}
