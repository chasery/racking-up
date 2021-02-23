import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RacksContext from '../../contexts/RacksContext';
import RacksApiService from '../../services/racks-api-service';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import './AddRack.css';

function AddRack(props) {
  const context = useContext(RacksContext);
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    context.clearError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddRack = (e) => {
    e.preventDefault();
    RacksApiService.postRack({
      rack_name: name,
    })
      .then((res) => {
        context.addRack(res);
        history.push(`/racks/${res.rack_id}`);
      })
      .catch(context.setErrorState);
  };

  return (
    <main role='main'>
      <section className='AddRack'>
        <div className='AddRack__wrapper'>
          <Form id='AddRack' onSubmit={(e) => handleAddRack(e)}>
            <h2>Add Rack</h2>
            <p>Enter the name of the rack you would like to add.</p>
            <FormField
              id='name'
              label='Name'
              type='text'
              isRequired={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button onClick={() => history.goBack()}>Cancel</button>
            <button type='submit'>Add Rack</button>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRack;
