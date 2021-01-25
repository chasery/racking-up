import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./EditRack.css";

function EditRack(props) {
  const [name, setName] = useState("");

  return (
    <main role="main">
      <section className="EditRack">
        <div className="EditRack__wrapper">
          <Form id="EditRack">
            <h2>Edit Rack</h2>
            <p>Edit the name of the rack.</p>
            <FormField
              id="name"
              label="Name"
              type="text"
              isRequired={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button>Cancel</button>
            <button>Edit Rack</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default EditRack;
