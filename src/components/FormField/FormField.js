import React from "react";
import "./FormField.css";

function FormField(props) {
  return (
    <div className="FormField">
      <label className="FormField__label" htmlFor={props.id}>
        {props.label}
        {props.isRequired ? <span className="FormField__required">*</span> : ""}
      </label>
      <input
        className="FormField__input"
        type={props.type}
        id={props.id}
        required={props.isRequired}
      />
    </div>
  );
}

export default FormField;
