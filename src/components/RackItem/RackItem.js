import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RackItemsApiService from '../../services/rack-items-api-service';
import Error from '../Error/Error';
import { currencyFormat } from '../../currencyFormat';
import './RackItem.css';

function RackItem(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const [error, setError] = useState(null);
  const { id, name, url, price, deleteRackItem } = props;
  const formattedPrice = currencyFormat.format(price);

  const handleDelete = (itemId) => {
    RackItemsApiService.deleteRackItem(itemId)
      .then(deleteRackItem(itemId))
      .catch((error) => setError(error.error));
  };

  if (name && price) {
    return (
      <li className='RackItem'>
        {url ? (
          <a
            className='RackItem__info'
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <span className='RackItem__infoName'>{name}</span>
            {price && (
              <span className='RackItem__infoPrice'>{formattedPrice}</span>
            )}
          </a>
        ) : (
          <div className='RackItem__info'>
            <span className='RackItem__infoName'>{name}</span>
            {price && (
              <span className='RackItem__infoPrice'>{formattedPrice}</span>
            )}
          </div>
        )}
        {rackId && (
          <div className='RackItem__controls'>
            <button
              disabled={error}
              onClick={() =>
                history.push(`/racks/${rackId}/edit-rack-item/${id}`)
              }
            >
              E
            </button>
            <button disabled={error} onClick={() => handleDelete(id)}>
              D
            </button>
          </div>
        )}
        {error ? <Error message={error} /> : null}
      </li>
    );
  } else {
    return (
      <li className='RackItem'>
        <span className='RackItem__infoName'>This rack has no items.</span>
      </li>
    );
  }
}

export default RackItem;
