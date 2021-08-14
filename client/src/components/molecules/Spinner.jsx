import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <section style={{ height: "78vh" }}>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </section>
);

export default Spinner;
