import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

CallToActionComponent.propTypes = {
  text: PropTypes.element.isRequired,
  callText: PropTypes.string.isRequired,
  url: PropTypes.string,
  copy: PropTypes.bool,
  copyText: PropTypes.string,
};

CallToActionComponent.defaultProps = {
  copy: false,
  copyText: '',
  url: '',
};

export default function CallToActionComponent({
  text, url, callText, copy, copyText,
}) {
  return (
    <div className="row section topspace">
      <div className="panel panel-cta">
        <div className="panel-body">
          <div className="col-lg-8">
            {text}
          </div>
          <div className="col-lg-4 text-right">
            {
              copy ?
                <CopyToClipboard text={copyText}><p>{callText}</p></CopyToClipboard>
              : <a href={url} className="btn btn-primary btn-lg">{callText}</a>
          }

          </div>
        </div>
      </div>
    </div>
  );
}
