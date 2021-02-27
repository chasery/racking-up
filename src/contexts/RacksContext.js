import React, { useState } from 'react';

const RacksContext = React.createContext({
  racks: [],
  setRacksState: () => {},
  addRack: () => {},
  editRack: () => {},
  deleteRack: () => {},
});

export default RacksContext;

const RacksProvider = (props) => {
  const [racks, setRacks] = useState([]);

  const setRacksState = (racks) => {
    setRacks(racks);
  };

  const addRack = (rack) => {
    setRacks([...racks, rack]);
  };

  const editRack = (rack) => {
    const { rack_id, rack_name } = rack;
    const updatedRack = {
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
    setRacksState: setRacksState,
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
