import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RackItemsApiService from '../../services/rack-items-api-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './AddRackItem.css';

function AddRackItem(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const [error, setError] = useState(null);

  //Controlled form state
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleAddRackItem = (e) => {
    const itemToAdd = { rackId, name, url, price };

    e.preventDefault();
    RackItemsApiService.postRackItem(itemToAdd)
      .then(history.push(`/racks/${rackId}`))
      .catch(setError);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddRackItem'>
          <div className='AddRackItem__wrapper'>
            <Form id='AddRackItem' onSubmit={(e) => handleAddRackItem(e)}>
              <div className='Form__header'>
                <h2>Add Item</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Enter the information for the clothing item you would like to
                  add.
                </p>
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
                  type='number'
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
                    Add Item
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

export default AddRackItem;
