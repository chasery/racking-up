import React from "react";

const RakcingUpContext = React.createContext({
  racks: [],
  rackItems: [],
  addRack: () => {},
  editRack: () => {},
  deleteRack: () => {},
  addRackItem: () => {},
  editRackItem: () => {},
  deleteRackItem: () => {},
});

export default RakcingUpContext;
