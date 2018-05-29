import React from 'react';
import PropTypes from 'prop-types';

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  url: PropTypes.string,
};

QuoteComponent.defaultProps = {
  author: '',
  url: '',
};

export default function QuoteComponent({ text, author, url }) {
  return (

    <div className="row section topspace">
      <div className="col-md-12">
        <p className="lead text-center text-muted"> {text} <br />--
          {author ? <a href={url}>{author}</a> : 'Unknown'}
        </p>
      </div>
    </div>

  );
}
