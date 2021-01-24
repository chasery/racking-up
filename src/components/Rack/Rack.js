import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import RackItem from "../RackItem/RackItem";
import { currencyFormat } from "../../currencyFormat";
import "./Rack.css";

const clothingArr = [
  {
    id: 1,
    rackId: 1,
    name: "H&M Navy Hoody",
    url: "https://www2.hm.com/en_us/index.html",
    price: 50.0,
  },
  {
    id: 2,
    rackId: 1,
    name: "Columbia Rain Jacket",
    url: "https://www.columbia.com/",
    price: 75.0,
  },
  {
    id: 3,
    rackId: 1,
    name: "Mountain Hardware Long Sleeve Shirt",
    url: "https://www.mountainhardwear.com/",
    price: 25.0,
  },
  {
    id: 4,
    rackId: 1,
    name: "APC Raw Denim Jeans",
    url: "https://www.apc-us.com/collections/men-denim",
    price: 200.0,
  },
  {
    id: 5,
    rackId: 2,
    name: "H&M V Neck Tshirts",
    url: "https://www2.hm.com/en_us/index.html",
    price: 25.0,
  },
  {
    id: 6,
    rackId: 2,
    name: "Express Oxford Shirt",
    url: "https://www.express.com/",
    price: 25.0,
  },
  {
    id: 7,
    rackId: 2,
    name: "Prana Dock Shorts",
    url: "https://www.prana.com/",
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
  const history = useHistory();
  const { rackId } = useParams();
  const { id, name } = props;
  const rackItems = clothingArr.filter((item) => item.rackId === props.id);

  return (
    <li className="Rack">
      {rackId ? (
        <div className="Rack__header">
          <Link to={`/racks`} className="Rack__headerArrow">
            {"<-"}
          </Link>
          <span className="Rack__headerName">{name}</span>
          <span className="Rack__headerCost">{getRackCost(rackItems)}</span>
          <div className="Rack__headerControls">
            <button onClick={() => history.push(`/edit-rack/${rackId}`)}>
              E
            </button>
            <button>D</button>
          </div>
        </div>
      ) : (
        <Link to={`/racks/${id}`} className="Rack__header">
          <span className="Rack__headerName">{name}</span>
          <span className="Rack__headerCost">{getRackCost(rackItems)}</span>
          <span className="Rack__headerArrow">{"->"}</span>
        </Link>
      )}
      <ul className="Rack__items">
        {rackItems.length ? createRackItems(rackItems) : <RackItem />}
      </ul>
    </li>
  );
}

export default Rack;
