import React from 'react';
import Input from './common/FormContol';
import Form from 'react-bootstrap/Form';
import { reduxForm, Field } from 'redux-form';
import { required, date, numericality } from 'redux-form-validators';

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
					validate={[ required() ]}
				/>
				<Field
					className="field"
					name="date"
					component={Input}
					placeholder="dd/mm/yyyy"
					validate={[ date({ format: 'dd/mm/yyyy' }) ]}
				/>
				<Field
					className="field"
					name="days"
					component={Input}
					placeholder="Days in space"
					validate={(required(), numericality())}
				/>
				<Field
					className="field"
					name="mission"
					component={Input}
					placeholder="Mission name"
					validate={[ required() ]}
				/>
				<h6>Had multiple missions?</h6>
				<Field className="field" name="isMultiple" component="input" type="checkbox" />
				<button>Add a record</button>
			</div>
		</form>
	);
};

const ReduxForm = reduxForm({
	form: 'edit'
})(FormToRender);

export default ReduxForm;
