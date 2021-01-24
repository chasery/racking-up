import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./AddRackItem.css";

function AddRackItem(props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");

  return (
    <main role="main">
      <section className="AddRackItem">
        <div className="AddRackItem__wrapper">
          <Form id="AddRackItem">
            <h2>Add Rack Item</h2>
            <p>
              Enter the information for the clothing item you would like to add.
            </p>
            <FormField
              id="name"
              label="Name"
              type="text"
              isRequired={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormField
              id="url"
              label="URL"
              type="text"
              isRequired={true}
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <FormField
              id="price"
              label="Price"
              type="text"
              isRequired={true}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <button>Cancel</button>
            <button>Add Rack Item</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRackItem;
