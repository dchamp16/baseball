import React from "react";
import ScoreTable from "./extra-components/Score-table";

const TopSideBar = () => {
  return (
    <div className="col-sm-4 sidebar-top">
      <h3>TOP SIDEBAR</h3>
      <ScoreTable />
    </div>
  );
};

export default TopSideBar;
