import React from "react";
import RacksList from "../../components/RacksList/RacksList";
import "./Racks.css";

function Racks(props) {
  return (
    <main role="main">
      <section className="Racks">
        <div className="Racks__wrapper">
          <h3>My Racks</h3>
          <RacksList />
        </div>
      </section>
    </main>
  );
}

export default Racks;
