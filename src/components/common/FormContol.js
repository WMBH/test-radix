/* eslint-disable react/prop-types */
import React from "react";
import Form from "react-bootstrap/Form";

import "./FormControl.css";

const Input = ({ input, meta, placeholder }) => {
  const hasError = meta.submitFailed && meta.error;

  return (
    <div>
      <Form.Control
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        size="sm"
        type="text"
        isInvalid={hasError}
        placeholder={hasError ? `Field ${meta.error}` : `${placeholder}`}
      />
    </div>
  );
};

export default Input;
