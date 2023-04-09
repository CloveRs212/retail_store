import { SignInWithGooglePopup } from "../../../utils/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.components";

const SignIn = () => {
  const logGoogleuser = async () => {
    const response = await SignInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Access</h1>
      <button onClick={logGoogleuser}>Sign In With Google Popup</button>
      <SignUpForm />
      </div>
  )
};

export default SignIn;