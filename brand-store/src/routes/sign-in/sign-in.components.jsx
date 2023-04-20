import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
 } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Sign In Access</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
      <SignUpForm />
      </div>
  )
};

export default SignIn;