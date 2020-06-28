import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, date, numericality } from 'redux-form-validators';

import Input from './common/FormContol';

import './css/Form.css';

const FormToRender = (props) => {
	const { handleSubmit } = props;

	const required = required();
	const date = date({ format: 'dd/mm/yyyy' });
	const numericality = numericality();
	return (
		<form onSubmit={handleSubmit}>
			<div className="fields">
				<Field
					className="field"
					name="name"
					component={Input}
					placeholder="Enter a name"
					validate={[ required ]}
				/>
				<Field
					className="field"
					name="date"
					component={Input}
					placeholder="dd/mm/yyyy"
					validate={[ date, numericality ]}
				/>
				<Field
					className="field"
					name="days"
					component={Input}
					placeholder="Days in space"
					validate={(required, numericality)}
				/>
				<Field
					className="field"
					name="mission"
					component={Input}
					placeholder="Mission name"
					validate={[ required ]}
				/>
				<div className="checkbox-field">
					<h6>Наличие повторных полетов</h6>
					<Field className="field" name="isMultiple" component="input" type="checkbox" />
				</div>
				<button>Добавить запись</button>
			</div>
		</form>
	);
};

const ReduxForm = reduxForm({
	form: 'edit'
})(FormToRender);

export default ReduxForm;
