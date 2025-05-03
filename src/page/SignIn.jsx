import { signInWithGooglePopup } from '../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </>
  );
};

export default SignIn;
