import React from "react";
import RacksList from "../../components/RacksList/RacksList";
import "./ViewRacks.css";

function ViewRacks(props) {
  return (
    <main role="main">
      <section className="ViewRacks">
        <div className="ViewRacks__wrapper">
          <h3>My Racks</h3>
          <RacksList />
        </div>
      </section>
    </main>
  );
}

export default ViewRacks;
