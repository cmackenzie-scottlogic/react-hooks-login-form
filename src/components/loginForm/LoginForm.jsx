import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useLoginFormValidator } from "./hooks/useLoginFormValidator";

const LoginForm = (props) => {
	const [form, setForm] = useState({
		email: "",
		password: "",
		confirmPassword: ""
	});
	const { errors, onInvalid, onBlurField } = useLoginFormValidator();

	const onUpdateField = (e) => {
		const field = e.target.name;
		errors[field] = e.target.validationMessage;
		form[field] = e.target.value;
		setForm({ ...form });
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (e.target.checkValidity()) {
			alert(JSON.stringify(form, null, 2));
		}
	};

	return (
		<form className={styles.form} onSubmit={onSubmitForm} noValidate>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Email</label>
				<input
					className="form-control"
					type="email"
					aria-label="Email field"
					name="email"
					value={form.email}
					onChange={onUpdateField}
					onBlur={onBlurField}
					onInvalid={onInvalid}
					required
				/>
				<p className="invalid-feedback">{errors.email}</p>
			</div>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Password</label>
				<input
					className="form-control"
					type="password"
					aria-label="Password field"
					name="password"
					value={form.password}
					onChange={onUpdateField}
					onBlur={onBlurField}
					onInvalid={onInvalid}
					required
					minLength="8"
				/>
				<p className="invalid-feedback">{errors.password}</p>
			</div>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Confirm Password</label>
				<input
					className="form-control"
					type="password"
					aria-label="Confirm password field"
					name="confirmPassword"
					value={form.confirmPassword}
					onChange={onUpdateField}
					onBlur={onBlurField}
					onInvalid={onInvalid}
					required
					minLength="8"
					pattern={form.password}
				/>
				<p className="invalid-feedback">{errors.confirmPassword}</p>
			</div>
			<div className={styles.formActions}>
				<button className={styles.formSubmitBtn} type="submit">
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
