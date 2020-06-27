import React from 'react';
import Input from './common/FormContol';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { reduxForm, Field } from 'redux-form';
import { required, date, numericality } from 'redux-form-validators';

const FormToRender = (props) => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Form.Group>
				<Field name="name" component={Input} placeholder="Enter a name" validate={[ required() ]} />

				<Field
					name="date"
					component={Input}
					placeholder="dd/mm/yyyy"
					validate={[ date({ format: 'dd/mm/yyyy' }) ]}
				/>

				<Field
					name="days"
					component={Input}
					placeholder="Days in space"
					validate={(required(), numericality())}
				/>

				<Field name="mission" component={Input} placeholder="Mission name" validate={[ required() ]} />

				<Field name="isMultiple" component="input" type="checkbox" />
				{/* <Button variant="success">Add a record</Button> */}
			</Form.Group>
			<button>Add a record</button>
		</form>
	);
};

const ReduxForm = reduxForm({
	form: 'edit'
})(FormToRender);

export default ReduxForm;
