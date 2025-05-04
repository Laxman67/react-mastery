import { signInWithGooglePopup } from '../utils/firebase.utils';
import { createUserDocumentFromAuth } from '../utils/firebase.utils';

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
    </>
  );
};

export default SignIn;
