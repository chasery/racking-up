import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import './AddRack.css';

function AddRack(props) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleAddRack = (e) => {
    e.preventDefault();
    RacksApiService.postRack({
      rack_name: name,
    })
      .then((res) => history.push(`/racks/${res.rack_id}`))
      .catch(setError);
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
            {error ? <p className='Form__error'>{error}</p> : ''}
            <div className='Form__controls'>
              <button onClick={() => history.goBack()}>Cancel</button>
              <button type='submit'>Add Rack</button>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default AddRack;
