import { useState } from "react";

export const useLoginFormValidator = () => {
	const [errors, setErrors] = useState({});

	const onBlurField = (e) => {
		e.target.checkValidity();
	};

	const onInvalid = (e) => {
		const field = e.target.name;
		errors[field] = e.target.validationMessage;
		setErrors({ ...errors });
		e.target.form.classList.add("was-validated");
	};

	return {
		onBlurField,
		onInvalid,
		errors,
		setErrors
	};
};
