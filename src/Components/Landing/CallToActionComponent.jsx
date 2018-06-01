import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

CallToActionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.element.isRequired,
  callText: PropTypes.string.isRequired,
  url: PropTypes.string,
  copy: PropTypes.bool,
  copyText: PropTypes.string,
};

CallToActionComponent.defaultProps = {
  icon: '',
  copy: false,
  copyText: '',
  url: '',
};

export default function CallToActionComponent({
  title, icon, text, url, callText, copy, copyText,
}) {
  return (
    <div className="section topspace">
      <div className="panel panel-cta">
        <div className="panel-body">
          <div className="row">
            <div className="col col-8">
              <h6 className="row align-items-center">
                {icon ? <i className={`col-1 fa fa-${icon} fa-2x`} aria-hidden="true" /> : null }
                <strong className="col-10" >{title}</strong>
              </h6>
              <br />
              {text}
            </div>
            <div className="col col-4 text-right">
              {
              copy ?
                <CopyToClipboard className="btn btn-primary btn-lg" text={copyText}>
                  <p>{callText}</p>
                </CopyToClipboard>
              : <a href={url} className="btn btn-primary btn-lg">{callText}</a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
