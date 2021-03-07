import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import RackItem from '../RackItem/RackItem';
import Error from '../Error/Error';
import { currencyFormat } from '../../currencyFormat';
import chevronIcon from '../../assets/svg/chevron.svg';
import editIcon from '../../assets/svg/edit.svg';
import deleteIcon from '../../assets/svg/delete.svg';
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
            <img src={chevronIcon} alt='View Racks' />
          </Link>
          <Link to={`/racks`} className='Rack__headerName'>
            {name}
          </Link>
          {items.length !== 0 ? (
            <Link to={`/racks`} className='Rack__headerCost'>
              {getRackCost(items)}
            </Link>
          ) : null}
          <div className='Rack__headerControls'>
            <button onClick={() => history.push(`/racks/${rackId}/edit-rack`)}>
              <img src={editIcon} alt='Edit Rack' />
            </button>
            <button onClick={() => handleRackDelete()}>
              <img src={deleteIcon} alt='Delete Rack' />
            </button>
          </div>
        </div>
      ) : (
        <Link to={`/racks/${id}`} className='Rack__header'>
          <span className='Rack__headerName'>{name}</span>
          {items.length !== 0 ? (
            <span className='Rack__headerCost'>{getRackCost(items)}</span>
          ) : null}
          <span className='Rack__headerArrow forward'>
            <img src={chevronIcon} alt='View Rack' />
          </span>
        </Link>
      )}
      <ul className='Rack__items'>
        {items.length ? createRackItems(items) : <RackItem />}
      </ul>
    </li>
  );
}

export default Rack;
