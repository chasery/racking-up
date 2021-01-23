import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./SignIn.css";

function SignIn(props) {
  return (
    <main role="main">
      <section className="SignIn">
        <div className="SignIn__wrapper">
          <Form id="SignIn">
            <h2>Sign In</h2>
            <p>Enter your Racking Up account credentials below to sign in.</p>
            <FormField id="email" label="Email" type="text" isRequired={true} />
            <FormField
              id="password"
              label="Password"
              type="password"
              isRequired={true}
            />
            <button>Sign In</button>
            <p class="Form__footer">
              Don't have an account? Sign up for a Racking Up account{" "}
              <Link to="/">here</Link>.
            </p>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
