import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';
import { UserContext } from '../../context/userContext';
import FormInput from '../formInput/FormInput';
import './signIn-form.styles.scss';
import Button from '../button/Button';
const defaultFormFields = {
  email: '',
  password: '',
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Reset the form fields
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('email already in use');
          break;
        case 'auth/invalid-credential':
          alert('Invalid Credentials');
          break;
        default:
          console.log(error);
      }
    }

    resetFields();
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Signu with your email or password</span>

      <form onSubmit={handleSignIn}>
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

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" onClick={SignInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
