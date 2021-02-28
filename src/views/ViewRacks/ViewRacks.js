import React, { useState, useEffect } from 'react';
import RacksApiService from '../../services/racks-api-service';
import RacksList from '../../components/RacksList/RacksList';
import Error from '../../components/Error/Error';
import './ViewRacks.css';

function ViewRacks(props) {
  const [racks, setRacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await RacksApiService.getRacks();
        let res = await apiCall;

        setRacks(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, []);

  return (
    <main role='main'>
      <section className='ViewRacks'>
        <div className='ViewRacks__wrapper'>
          {error ? (
            <Error message={error} />
          ) : (
            <>
              <h3>My Racks</h3>
              <RacksList racks={racks} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default ViewRacks;
