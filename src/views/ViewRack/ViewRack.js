import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RacksContext from '../../contexts/RacksContext';
import RacksApiService from '../../services/racks-api-service';
import Rack from '../../components/Rack/Rack';
import './ViewRack.css';

function ViewRack(props) {
  const context = useContext(RacksContext);
  const { rackId } = useParams();

  useEffect(() => {
    context.clearErrorState();
    console.log(rackId);
    RacksApiService.getRack(rackId)
      .then(context.setRackState)
      .catch(context.setErrorState);

    return function cleanup() {
      context.clearRackState();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderRack = () => {
    const { rack_id, rack_name, items } = context.rack;

    return <Rack id={rack_id} name={rack_name} items={items} />;
  };

  return (
    <main role='main'>
      <section className='ViewRack'>
        <div className='ViewRack__wrapper'>
          <ol className='ViewRack__rack'>
            {renderRack(rackId)}
            <li className='ViewRack__add'>
              <Link to={`/add-rack-item/${rackId}`}>+ Add Rack Item</Link>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default ViewRack;
