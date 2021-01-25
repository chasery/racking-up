import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RackingUpContext from "../../RackingUpContext";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./AddRackItem.css";

function AddRackItem(props) {
  const context = useContext(RackingUpContext);
  const { rackId } = useParams();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const handleAddRackItem = (e) => {
    e.preventDefault();
    const id = uuidv4();
    context.addRackItem({ id, rackId, name, url, price });
    history.push(`/racks/${rackId}`);
  };

  return (
    <main role="main">
      <section className="AddRackItem">
        <div className="AddRackItem__wrapper">
          <Form id="AddRackItem" onSubmit={(e) => handleAddRackItem(e)}>
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
              type="number"
              isRequired={true}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <button onClick={() => history.goBack()}>Cancel</button>
            <button type="submit">Add Rack Item</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRackItem;
