import { signInWithGooglePopup } from '../utils/firebase.utils';
import { createUserDocumentFromAuth } from '../utils/firebase.utils';
import SignUp from '../components/sign-up-form/SignUp';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const docRef = await createUserDocumentFromAuth(user);
    console.log(docRef);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <div>
        <SignUp />
      </div>
    </>
  );
};

export default SignIn;
