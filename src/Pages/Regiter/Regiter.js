import React from "react";
import "./Regiter.scss";

const Regiter = () => {
  const registerHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Regiter" data-testid="Regiter">
      <div className="container">
        <form onSubmit={registerHandler}>
          <input type="text" placeholder="user" />
        </form>
      </div>
    </div>
  );
};
export default Regiter;
