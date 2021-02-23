import React, { useContext, useEffect } from 'react';
import RacksContext from '../../contexts/RacksContext';
import RacksApiService from '../../services/racks-api-service';
import RacksList from '../../components/RacksList/RacksList';
import './ViewRacks.css';

function ViewRacks(props) {
  const context = useContext(RacksContext);

  useEffect(() => {
    context.clearError();
    RacksApiService.getRacks()
      .then(context.setRacksState)
      .catch(context.setErrorState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main role='main'>
      <section className='ViewRacks'>
        <div className='ViewRacks__wrapper'>
          <h3>My Racks</h3>
          <RacksList racks={context.racks} />
        </div>
      </section>
    </main>
  );
}

export default ViewRacks;
