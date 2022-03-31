import styles from "./LoginForm.module.css";
import { useLoginFormValidator } from "./hooks/useLoginFormValidator";

const LoginForm = (props) => {
	const { form, errors, onChange, onInvalid, onBlur } = useLoginFormValidator({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const onSubmit = (e) => {
		e.preventDefault();
		if (e.target.checkValidity()) {
			alert(JSON.stringify(form, null, 2));
		}
	};

	return (
		<form className={styles.form} noValidate onSubmit={onSubmit} onChange={onChange} onInvalid={onInvalid}>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Email</label>
				<input
					className="form-control"
					type="email"
					aria-label="Email field"
					name="email"
					value={form.email}
					onBlur={onBlur}
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
					onBlur={onBlur}
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
					onBlur={onBlur}
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
