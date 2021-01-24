import React from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./EditRackItem.css";

function EditRackItem(props) {
  return (
    <main role="main">
      <section className="EditRackItem">
        <div className="EditRackItem__wrapper">
          <Form id="EditRackItem">
            <h2>Edit Rack Item</h2>
            <p>Edit the information for the clothing item.</p>
            <FormField id="name" label="Name" type="text" isRequired={true} />
            <FormField id="url" label="URL" type="text" isRequired={true} />
            <FormField id="price" label="Price" type="text" isRequired={true} />
            <button>Cancel</button>
            <button>Edit Rack Item</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default EditRackItem;
