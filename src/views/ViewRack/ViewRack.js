import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import Rack from '../../components/Rack/Rack';
import './ViewRack.css';

function ViewRack(props) {
  const { rackId } = useParams();
  const [rack, setRack] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await RacksApiService.getRack(rackId);
        let res = await apiCall;

        setRack(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [rackId]);

  return (
    <main role='main'>
      <section className='ViewRack'>
        <div className='ViewRack__wrapper'>
          {error ? (
            <p className='ViewRack__error'>{error}</p>
          ) : (
            <ol className='ViewRack__rack'>
              <Rack
                id={rack.rack_id}
                name={rack.rack_name}
                items={rack.items}
              />
              <li className='ViewRack__add'>
                <Link to={`/add-rack-item/${rackId}`}>+ Add Rack Item</Link>
              </li>
            </ol>
          )}
        </div>
      </section>
    </main>
  );
}

export default ViewRack;
