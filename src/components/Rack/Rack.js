import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import RackItem from '../RackItem/RackItem';
import Error from '../Error/Error';
import { currencyFormat } from '../../currencyFormat';
import './Rack.css';

function Rack(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const [error, setError] = useState(null);
  const { id, name, items = [], deleteRackItem } = props;

  const handleRackDelete = () => {
    RacksApiService.deleteRack(id)
      .then((res) => {
        history.push(`/racks`);
      })
      .catch(setError);
  };

  const createRackItems = (items) => {
    return items.map((item) => (
      <RackItem
        key={item.item_id}
        id={item.item_id}
        name={item.item_name}
        url={item.item_url}
        price={item.item_price}
        deleteRackItem={deleteRackItem}
      />
    ));
  };

  const getRackCost = (items) => {
    if (items.length !== 0) {
      let cost = 0;
      items.map((item) => (cost += item.item_price));

      return currencyFormat.format(cost);
    }
  };

  return (
    <li className='Rack'>
      {error ? <Error message={error} /> : null}
      {rackId && !error ? (
        <div className='Rack__header'>
          <Link to={`/racks`} className='Rack__headerArrow'>
            {'<-'}
          </Link>
          <span className='Rack__headerName'>{name}</span>
          {items.length !== 0 ? (
            <span className='Rack__headerCost'>{getRackCost(items)}</span>
          ) : null}
          <div className='Rack__headerControls'>
            <button onClick={() => history.push(`/racks/${rackId}/edit-rack`)}>
              E
            </button>
            <button onClick={() => handleRackDelete()}>D</button>
          </div>
        </div>
      ) : (
        <Link to={`/racks/${id}`} className='Rack__header'>
          <span className='Rack__headerName'>{name}</span>
          {items.length !== 0 ? (
            <span className='Rack__headerCost'>{getRackCost(items)}</span>
          ) : null}
          <span className='Rack__headerArrow'>{'->'}</span>
        </Link>
      )}
      <ul className='Rack__items'>
        {items.length ? createRackItems(items) : <RackItem />}
      </ul>
    </li>
  );
}

export default Rack;
