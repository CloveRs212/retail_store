import { useState } from "react";
import FormInput from "../../components/form-input/form-input.components";

import { CreateAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password != confirmPassword) {
      Alert('passwords do not match');
      return;
    }

    try {
      const { user } = CreateAuthUserWithEmailAndPassword(email, password);
      const resetFormFields = () => {
        setFormFields(defaultFormFields)
      }
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Oh No! Email is already in use! We can not make a new user')
      }
      console.log('user creation encourtered an error', error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up With Your Email</h1>
      <form onSubmit={handleSubmit}>
          <FormInput
            label='Display Name'
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
          <FormInput
            label='email'
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label='password'
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <input
            label='Confirm Password'
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
