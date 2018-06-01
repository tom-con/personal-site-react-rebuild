import React from 'react';
import PropTypes from 'prop-types';

import { UncontrolledTooltip } from 'reactstrap';

ProjectComponent.propTypes = {
  idx: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  blogUrl: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  deployUrl: PropTypes.string,
  videoUrl: PropTypes.string,
};

ProjectComponent.defaultProps = {
  blogUrl: null,
  imgUrl: '',
  imgAlt: 'No image provided, sorry',
  deployUrl: null,
  videoUrl: null,
};

export default function ProjectComponent({
  idx, title, blogUrl, imgUrl, imgAlt, deployUrl, videoUrl,
}) {
  return (
    <div className="col">
      <a className="thumbnail" href={blogUrl} target="_blank">
        <span className="img">
          <img src={imgUrl} alt={imgAlt} />
          {blogUrl ?
            <span className="cover"><span className="more">See details &rarr;</span></span>
          : null}
        </span>
        <span className="title">{title}</span>
      </a>
      <span className="details">
        <a id={`deploy-${idx}`} disabled={!deployUrl} href={deployUrl} target="_blank">Deployment</a>
        {!deployUrl ?
          <UncontrolledTooltip
            placement="bottom"
            target={`deploy-${idx}`}
          >
                            No deployment :(
          </UncontrolledTooltip>
        : null }
        <span> | </span>
        <a id={`video-${idx}`} disabled={!videoUrl} href={videoUrl} target="_blank">Video</a>
        {!videoUrl ?
          <UncontrolledTooltip
            placement="bottom"
            target={`video-${idx}`}
          >
                        No video :(
          </UncontrolledTooltip>
        : null }
      </span>
      <p />
    </div>

  );
}
