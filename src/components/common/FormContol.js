import React from 'react';
import Form from 'react-bootstrap/Form';
import './FormControl.css';

const Input = ({ input, meta, placeholder, ...props }) => {
	const hasError = meta.submitFailed && meta.error;

	return (
		<div>
			<div>
				<Form.Control
					{...props}
					{...input}
					size="sm"
					type="text"
					isInvalid={hasError}
					placeholder={hasError ? `Field ${meta.error}` : `${placeholder}`}
					onBlur={(meta.submitFailed = false)}
				/>
			</div>
		</div>
	);
};

export default Input;
