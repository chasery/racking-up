import React from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./Landing.css";

function Landing(props) {
  return (
    <main role="main">
      <section className="Hero">
        <div className="Hero__wrapper">
          <Form id="SignUp">
            <h2>Sign up today!</h2>
            <p>
              Creating an account for Racking Up is easy! Fill out the
              information below to create an account.
            </p>
            <FormField id="email" label="Email" type="text" isRequired={true} />
            <FormField
              id="password"
              label="Password"
              type="password"
              isRequired={true}
            />
            <FormField
              id="passwordConfirm"
              label="Password (Confirm)"
              type="password"
              isRequired={true}
            />
            <button>Sign Up</button>
            <p className="Form__footer">
              Already have an account? Sign in to your Racking Up account
              <a href="sign-in.html">here</a>.
            </p>
          </Form>
        </div>
      </section>
      <section className="AppInfo">
        <div className="AppInfo__wrapper">
          <h3>Organize clothing purchases from online retailers</h3>
          <p>
            Racking Up helps you organize your upcoming wardrobe purchases with
            a custom rack system. With a little help from our app, you can
            curate lists of those clothing items you fancy from any online
            retailer.
          </p>
          <h3>Prioritize your clothing racks</h3>
          <p>
            Trying to work within a budget or only care about clothes for the
            season? Racking Up allows you to prioritize racks of clothing for
            purchase in a way that matters to you.
          </p>
          <h3>Want to give it a spin?</h3>
          <p>You can use our demo account to check out our app.</p>
        </div>
      </section>
    </main>
  );
}

export default Landing;
