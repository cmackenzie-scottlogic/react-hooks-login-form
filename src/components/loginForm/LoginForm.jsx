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
		e.target.classList.add("was-validated");
		if (e.target.checkValidity()) {
			alert(JSON.stringify(form, null, 2));
		} else {
			e.target.querySelectorAll(":invalid")[0]?.focus();
		}
	};

	const customInvalid = (e, otherId) => {
		const element1 = e.target;
		const element2 = document.getElementById(otherId);
		if (
			!element1.validity.valueMissing &&
			!element1.validity.tooShort &&
			!element2.validity.valueMissing &&
			!element2.validity.tooShort &&
			element1.value !== element2.value
		) {
			element1.setCustomValidity("Please ensure that the password and confirm password fields match");
			element2.setCustomValidity("");
		} else {
			element1.setCustomValidity("");
			element2.setCustomValidity("");
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
						onInput={(e) => customInvalid(e, "confirmPassword")}
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
						onInput={(e) => customInvalid(e, "password")}
					/>
					<p id="invalid-confirmPassword" className="invalid-feedback">
						{errors.confirmPassword}
					</p>
				</div>
				<div className={styles.formActions}>
					<button className={styles.formSubmitBtn}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
