import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RacksApiService from '../../services/racks-api-service';
import Header from '../../components/Header/Header';
import Rack from '../../components/Rack/Rack';
import Error from '../../components/Error/Error';
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

  const handleDeleteRackItem = (itemId) => {
    const updatedItems = rack.items.filter((item) => item.item_id !== itemId);

    setRack({ ...rack, items: updatedItems });
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='ViewRack'>
          <div className='ViewRack__wrapper'>
            {error ? (
              <Error message={error} />
            ) : (
              <ol className='ViewRack__rack'>
                <Rack
                  id={rack.rack_id}
                  name={rack.rack_name}
                  items={rack.items}
                  deleteRackItem={handleDeleteRackItem}
                />
                <li className='ViewRack__add'>
                  <Link to={`/racks/${rackId}/add-rack-item`}>
                    + Add Rack Item
                  </Link>
                </li>
              </ol>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default ViewRack;
