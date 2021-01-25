import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RackingUpContext from "../../RackingUpContext";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import "./AddRack.css";

function AddRack(props) {
  const context = useContext(RackingUpContext);
  const [name, setName] = useState("");
  const history = useHistory();

  const handleAddRack = (e) => {
    e.preventDefault();
    const id = uuidv4();
    context.addRack({ id: id, rackName: name });
    history.push(`/racks/${id}`);
  };

  return (
    <main role="main">
      <section className="AddRack">
        <div className="AddRack__wrapper">
          <Form id="AddRack" onSubmit={(e) => handleAddRack(e)}>
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
            <button onClick={() => history.goBack()}>Cancel</button>
            <button type="submit">Add Rack</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRack;
