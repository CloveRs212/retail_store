import { 
  SignInWithGooglePopup, 
  createUserDocumentFromAuth,
 } from "../../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.components";

const SignIn = () => {
  const logGoogleuser = async () => {
    const response = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Access</h1>
      <button onClick={logGoogleuser}>Sign In With Google</button>
      <SignUpForm />
      </div>
  )
};

export default SignIn;