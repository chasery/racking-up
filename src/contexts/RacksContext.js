import React, { useState } from 'react';

export const nullRack = {
  rack_id: null,
  rack_name: null,
  user_id: null,
  created_at: null,
  items: [],
};

const RacksContext = React.createContext({
  racks: [],
  rack: {},
  error: null,
  setErrorState: () => {},
  clearErrorState: () => {},
  setRacksState: () => {},
  setRackState: () => {},
  clearRackState: () => {},
  addRack: () => {},
  editRack: () => {},
  deleteRack: () => {},
});

export default RacksContext;

const RacksProvider = (props) => {
  const [racks, setRacks] = useState([]);
  const [rack, setRack] = useState(nullRack);
  const [error, setError] = useState(null);

  const setErrorState = (error) => {
    console.log(error);
    setError({ error });
  };

  const clearErrorState = () => {
    setError({ error: null });
  };

  const setRacksState = (racks) => {
    setRacks(racks);
  };

  const setRackState = (rack) => {
    setRack(rack);
  };

  const clearRackState = () => {
    setRack(nullRack);
  };

  const addRack = (rack) => {
    setRacks([...racks, rack]);
  };

  const editRack = (rack) => {
    const { rack_id, rack_name } = rack;
    const updatedRack = {
      rack_id,
      rack_name,
    };

    setRacks([
      ...racks.map((rack) =>
        rack.rack_id === rack_id
          ? {
              ...rack,
              updatedRack,
            }
          : rack
      ),
    ]);
  };

  const deleteRack = (rackId) => {
    const updatedRacks = racks.filter((rack) => rack.rack_id !== rackId);

    setRacks(updatedRacks);
  };

  const value = {
    racks: racks,
    rack: rack,
    error: error,
    setErrorState: setErrorState,
    clearErrorState: clearErrorState,
    setRacksState: setRacksState,
    setRackState: setRackState,
    clearRackState: clearRackState,
    addRack: addRack,
    editRack: editRack,
    deleteRack: deleteRack,
  };

  return (
    <RacksContext.Provider value={value}>
      {props.children}
    </RacksContext.Provider>
  );
};

export { RacksProvider };
