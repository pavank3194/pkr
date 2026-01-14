import React from "react";

const Input = ({label, error, className, ...props}) => {
  return (
    <div className="input-container">
        {label && <label>{label}</label>}
        <input className={className ? className : "default-input"} {...props} />
        {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;