import React from "react";

const RakcingUpContext = React.createContext({
  racks: [],
  rackItems: [],
  addRack: () => {},
});

export default RakcingUpContext;
