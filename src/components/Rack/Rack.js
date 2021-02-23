import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import RackItem from '../RackItem/RackItem';
import { currencyFormat } from '../../currencyFormat';
import './Rack.css';

function Rack(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const { id, name, items } = props;

  const createRackItems = (items) => {
    return items.map((item) => (
      <RackItem
        key={item.item_id}
        id={item.item_id}
        name={item.item_name}
        url={item.item_url}
        price={item.item_price}
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
      {rackId ? (
        <div className='Rack__header'>
          <Link to={`/racks`} className='Rack__headerArrow'>
            {'<-'}
          </Link>
          <span className='Rack__headerName'>{name}</span>
          <span className='Rack__headerCost'>{getRackCost(items)}</span>
          <div className='Rack__headerControls'>
            <button onClick={() => history.push(`/edit-rack/${rackId}`)}>
              E
            </button>
            <button>D</button>
          </div>
        </div>
      ) : (
        <Link to={`/racks/${id}`} className='Rack__header'>
          <span className='Rack__headerName'>{name}</span>
          <span className='Rack__headerCost'>{getRackCost(items)}</span>
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
