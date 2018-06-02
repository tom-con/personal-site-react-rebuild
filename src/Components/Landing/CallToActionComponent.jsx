import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'reactstrap';

export default class CallToActionComponent extends Component {
  constructor(props) {
    super(props);
    this.activateTooltip = this.activateTooltip.bind(this);
    this.deactivateTooltip = this.deactivateTooltip.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  activateTooltip() {
    this.setState({
      tooltipOpen: true,
    }, () => {
      setTimeout(() => {
        this.deactivateTooltip();
      }, 1800);
    });
  }

  deactivateTooltip() {
    this.setState({
      tooltipOpen: false,
    });
  }

  render() {
    const {
      title, icon, text, url, callText, copy, copyText,
    } = this.props;
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
                <CopyToClipboard className="btn btn-primary btn-lg" text={copyText} onCopy={this.activateTooltip}>
                  <p id="tooltip-target">{callText}</p>
                </CopyToClipboard>
              : <a href={url} className="btn btn-primary btn-lg">{callText}</a>
              }
              </div>
              <Tooltip target="tooltip-target" placement="right" isOpen={this.state.tooltipOpen}>
                {`"${copyText}" copied to clipboard!`}
              </Tooltip>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
