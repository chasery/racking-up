import React from 'react';

export const nullRackItem = {
  item_id: null,
  item_name: null,
  item_price: null,
  item_url: null,
  created_at: null,
};

const RackItemContext = React.createContext({
  rackItem: nullRackItem,
  error: null,
  setError: () => {},
  clearError: () => {},
  setRackItem: () => {},
  addRackItem: () => {},
  editRackItem: () => {},
  deleteRackItem: () => {},
});

export default RackItemContext;
