import React from 'react';
import PropTypes from 'prop-types';

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Skills({ skills }) {
  return (
    <div className="row section featured topspace">
      <h2 className="section-title"><span>Skills</span></h2>
      <div className="row">
        {
            skills.map(s => (
              <div key={s.name} className="col-3">
                <h3 className="text-center">{s.name}</h3>
                <h4 className="text-center"><i className={`fa fa-${s.icon} fa-2x`} /></h4>
                <p>{s.description}</p>
                {s.url ? <p className="text-center"><a href={s.url} className="btn btn-action">Read more</a></p> : null}
              </div>))
        }
      </div>
    </div>
  );
}
