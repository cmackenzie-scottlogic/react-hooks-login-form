import styles from "./LoginForm.module.css";
import { useLoginFormValidator } from "./hooks/useLoginFormValidator";

const LoginForm = () => {
	const { form, errors, onChange, onInvalid, onBlur } = useLoginFormValidator({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const onSubmit = (e) => {
		e.preventDefault();
		if (e.target.checkValidity()) {
			alert(JSON.stringify(form, null, 2));
		} else {
			e.target.querySelectorAll(":invalid")[0]?.focus();
		}
	};

	return (
		<div role="presentation" onSubmit={onSubmit} onChange={onChange} onInvalid={onInvalid} onBlur={onBlur}>
			<form className={styles.form} noValidate>
				<div className={styles.formGroup}>
					<label className={styles.formLabel} htmlFor="email">
						Email
					</label>
					<input
						id="email"
						aria-describedby="invalid-email"
						className="form-control"
						type="email"
						name="email"
						value={form.email}
						required
					/>
					<p id="invalid-email" className="invalid-feedback">
						{errors.email}
					</p>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.formLabel} htmlFor="password">
						Password
					</label>
					<input
						id="password"
						aria-describedby="invalid-password"
						className="form-control"
						type="password"
						name="password"
						value={form.password}
						required
						minLength="8"
					/>
					<p id="invalid-password" className="invalid-feedback">
						{errors.password}
					</p>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.formLabel} htmlFor="confirmPassword">
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						aria-describedby="invalid-confirmPassword"
						className="form-control"
						type="password"
						name="confirmPassword"
						value={form.confirmPassword}
						required
						minLength="8"
						pattern={form.password}
					/>
					<p id="invalid-confirmPassword" className="invalid-feedback">
						{errors.confirmPassword}
					</p>
				</div>
				<div className={styles.formActions}>
					<button className={styles.formSubmitBtn} type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
