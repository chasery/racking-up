import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./AddRack.css";

function AddRack(props) {
  const [name, setName] = useState("");

  return (
    <main role="main">
      <section className="AddRack">
        <div className="AddRack__wrapper">
          <Form id="AddRack">
            <h2>Add Rack</h2>
            <p>Enter the name of the rack you would like to add.</p>
            <FormField
              id="name"
              label="Name"
              type="text"
              isRequired={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button>Cancel</button>
            <button>Add Rack</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRack;
