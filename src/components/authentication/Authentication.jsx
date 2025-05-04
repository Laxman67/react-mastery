import SignUp from '../sign-up-form/SignUp';
import SignIn from '../sign-in-form/SignIn';
import './authentication.styles.scss';
const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Authentication;
