import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RackItemsApiService from '../../services/rack-items-api-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './EditRackItem.css';

function EditRackItem(props) {
  const history = useHistory();
  const { rackId, rackItemId } = useParams();
  const [rackItem, setRackItem] = useState({});
  const [error, setError] = useState(null);

  // Controlled form state
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await RackItemsApiService.getRackItem(rackItemId);
        let res = await apiCall;

        setRackItem(res);
        setName(res.item_name);
        setPrice(res.item_price);
        setUrl(res.item_url);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [rackItemId]);

  const handleEditRackItem = async (e) => {
    const { item_id } = rackItem;
    e.preventDefault();
    await RackItemsApiService.editRackItem(item_id, {
      name,
      price,
      url,
    })
      .then(history.push(`/racks/${rackId}`))
      .catch(setError);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='EditRackItem'>
          <div className='EditRackItem__wrapper'>
            <Form id='EditRackItem' onSubmit={(e) => handleEditRackItem(e)}>
              <div className='Form__header'>
                <h2>Edit Item</h2>
              </div>
              <div className='Form__body'>
                <p>Edit the information for the clothing item.</p>
                <FormField
                  id='name'
                  label='Name'
                  type='text'
                  isRequired={true}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <FormField
                  id='price'
                  label='Price'
                  type='text'
                  isRequired={true}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
                <FormField
                  id='url'
                  label='URL'
                  type='text'
                  isRequired={false}
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
                {error ? <Error message={error} /> : null}
                <div className='Form__controls'>
                  <button
                    className='Form__button secondary'
                    type='button'
                    onClick={() => history.push(`/racks/${rackId}`)}
                  >
                    Cancel
                  </button>
                  <button className='Form__button primary' type='submit'>
                    Edit Item
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditRackItem;
