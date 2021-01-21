import React from "react";
import { Link } from "react-router-dom";
import RackItem from "../RackItem/RackItem";
import { currencyFormat } from "../../currencyFormat";
import "./Rack.css";

const clothingArr = [
  {
    id: 1,
    rackId: 1,
    name: "H&M Navy Hoody",
    url: "http://localhost:3000/racks",
    price: 50.0,
  },
  {
    id: 2,
    rackId: 1,
    name: "Columbia Rain Jacket",
    url: "http://localhost:3000/racks",
    price: 75.0,
  },
  {
    id: 3,
    rackId: 1,
    name: "Mountain Hardware Long Sleeve Shirt",
    url: "http://localhost:3000/racks",
    price: 25.0,
  },
  {
    id: 4,
    rackId: 1,
    name: "APC Raw Denim Jeans",
    url: "http://localhost:3000/racks",
    price: 200.0,
  },
  {
    id: 5,
    rackId: 2,
    name: "H&M V Neck Tshirts",
    url: "http://localhost:3000/racks",
    price: 25.0,
  },
  {
    id: 6,
    rackId: 2,
    name: "Express Oxford Shirt",
    url: "http://localhost:3000/racks",
    price: 25.0,
  },
  {
    id: 7,
    rackId: 2,
    name: "Prana Dock Shorts",
    url: "http://localhost:3000/racks",
    price: 75.0,
  },
];

const createRackItems = (items) => {
  return items.map((item) => (
    <RackItem
      key={item.id}
      id={item.id}
      rackId={item.rackId}
      name={item.name}
      url={item.url}
      price={item.price}
    />
  ));
};

const getRackCost = (items) => {
  let cost = 0;
  items.map((item) => (cost += item.price));

  return currencyFormat.format(cost);
};

function Rack(props) {
  const { id, name } = props;
  const rackItems = clothingArr.filter((item) => item.rackId === props.id);

  return (
    <li className="Rack">
      <Link to={`/rack/${id}`}>
        <div className="Rack__header">
          <div className="Rack__headerName">{name}</div>
          <div className="Rack__headerCost">{getRackCost(rackItems)}</div>
          <div className="Rack__headerArrow">-></div>
        </div>
      </Link>
      <ul className="Rack__items">
        {rackItems.length ? (
          createRackItems(rackItems)
        ) : (
          <RackItem name="No Clothing" />
        )}
      </ul>
    </li>
  );
}

export default Rack;
