import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import FormInput from '../formInput/FormInput';
import './signUp-form.styles.scss';
import Button from '../button/Button';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have account</h2>
      <span>Signu with your email or password</span>

      <form onSubmit={handleSignUp}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="google">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
