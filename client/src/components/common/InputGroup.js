import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const InputGroup = ({
  name,
  type,
  placeholder,
  value,
  error,
  icon,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired
}

InputGroup.defaultProps = {
  type: "text"
}

export default InputGroup;