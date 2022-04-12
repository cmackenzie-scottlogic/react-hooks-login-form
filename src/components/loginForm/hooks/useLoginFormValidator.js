import { useState } from "react";

export const useLoginFormValidator = (initialForm) => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState(initialForm);

	const onBlur = (e) => {
		e.target.classList.add("was-validated");
		e.target.checkValidity();
	};

	const onInvalid = (e) => {
		const field = e.target.name;
		errors[field] = e.target.validationMessage;
		setErrors({ ...errors });
	};

	const onChange = (e) => {
		const field = e.target.name;
		errors[field] = e.target.validationMessage;
		form[field] = e.target.value;
		setForm({ ...form });
	};

	return {
		onBlur,
		onChange,
		onInvalid,
		errors,
		form
	};
};
