import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './EditRack.css';

function EditRack(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const [rack, setRack] = useState({});
  const [error, setError] = useState(null);

  // Controlled form state
  const [name, setName] = useState('');

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await RacksApiService.getRack(rackId);
        let res = await apiCall;

        setRack(res);
        setName(res.rack_name);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [rackId]);

  const handleEditRack = (e) => {
    const { rack_id } = rack;
    e.preventDefault();
    RacksApiService.editRack(rack_id, {
      rack_name: name,
    })
      .then(history.push(`/racks/${rack_id}`))
      .catch(setError);
  };

  return (
    <main role='main'>
      <section className='EditRack'>
        <div className='EditRack__wrapper'>
          <Form id='EditRack' onSubmit={(e) => handleEditRack(e)}>
            <h2>Edit Rack</h2>
            <p>Edit the name of the rack.</p>
            <FormField
              id='name'
              label='Name'
              type='text'
              isRequired={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {error ? <Error message={error} /> : null}
            <div className='Form__controls'>
              <button
                type='button'
                onClick={() =>
                  error
                    ? history.push(`/racks`)
                    : history.push(`/racks/${rack.rack_id}`)
                }
              >
                Cancel
              </button>
              <button type='submit' disabled={error}>
                Edit Rack
              </button>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default EditRack;
