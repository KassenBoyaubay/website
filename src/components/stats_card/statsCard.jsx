import React from "react";
import "./statsCard.scss";

const StatsCard = () => {
  return (
    <div className="StatsCard">
      <div className="sc-container">
        <div className="sc-card">
          <div className="info-left">
            <h2 className="info-heading">Marketing</h2>
            <p className="info-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ea
              natus nulla nostrum{" "}
            </p>
            <button className="info-button">
              Read Our Cases
            </button>
          </div>
          <div className="info-right">
            <div className="stat-group">
              <h5 className="stat-number">+45%</h5>
              <span className="stat-name">Client revenue</span>
            </div>
            <div className="stat-group">
              <h5 className="stat-number">+29%</h5>
              <span className="stat-name">Ad Expenses</span>
            </div>
            <div className="stat-group">
              <h5 className="stat-number">+42%</h5>
              <span className="stat-name">Maus</span>
            </div>
            <div className="stat-group">
              <h5 className="stat-number">+98%</h5>
              <span className="stat-name">Overall roi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
