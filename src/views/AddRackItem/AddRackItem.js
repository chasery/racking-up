import React from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./AddRackItem.css";

function AddRackItem(props) {
  return (
    <main role="main">
      <section className="AddRackItem">
        <div className="AddRackItem__wrapper">
          <Form id="AddRackItem">
            <h2>Add Rack Item</h2>
            <p>
              Enter the information for the clothing item you would like to add.
            </p>
            <FormField id="name" label="Name" type="text" isRequired={true} />
            <FormField id="url" label="URL" type="text" isRequired={true} />
            <FormField id="price" label="Price" type="text" isRequired={true} />
            <button>Cancel</button>
            <button>Add Rack Item</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRackItem;
