import React, { useState, useEffect } from 'react';
import RacksApiService from '../../services/racks-api-service';
import Header from '../../components/Header/Header';
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
    <>
      <Header />
      <main role='main'>
        <section className='ViewRacks'>
          <div className='ViewRacks__wrapper'>
            {error ? (
              <Error message={error} />
            ) : (
              <>
                <RacksList racks={racks} />
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default ViewRacks;
