import React from 'react';
import { Link } from 'react-router-dom';
import Rack from '../Rack/Rack';
import './RacksList.css';

function RacksList(props) {
  const renderRacks = (racks) => {
    if (racks) {
      return racks.map((rack) => (
        <Rack
          key={rack.rack_id}
          id={rack.rack_id}
          name={rack.rack_name}
          items={rack.items}
        />
      ));
    }
  };

  return (
    <ol className='RacksList'>
      {renderRacks(props.racks)}
      <li className='RacksList__add'>
        <Link to='/racks/add-rack'>+ Add Rack</Link>
      </li>
    </ol>
  );
}

export default RacksList;
