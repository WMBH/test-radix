import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, date, numericality } from 'redux-form-validators';

import Input from './common/FormContol';

import './css/Form.css';

const requiredValidator = [required()];
const dateValidator = [date({ format: 'dd/mm/yyyy' })];
const daysValidator = [required(), numericality()];

const FormToRender = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <Field
          className="field"
          name="name"
          component={Input}
          placeholder="Enter a name"
          validate={requiredValidator}
        />
        <Field
          className="field"
          name="date"
          component={Input}
          placeholder="dd/mm/yyyy"
          validate={dateValidator}
        />
        <Field
          className="field"
          name="days"
          component={Input}
          placeholder="Days in space"
          validate={daysValidator}
        />
        <Field
          className="field"
          name="mission"
          component={Input}
          placeholder="Mission name"
          validate={requiredValidator}
        />
        <div className="checkbox-field">
          <h6>Наличие повторных полетов</h6>
          <Field
            className="field"
            name="isMultiple"
            component="input"
            type="checkbox"
          />
        </div>
        <button>Добавить запись</button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: 'edit',
})(FormToRender);

export default ReduxForm;
