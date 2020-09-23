import React from "react";
import Tile from "./Tile";
export default () => {
  return (
    <div>
      This is going to be Catan
      <Tile type="brick" />
      <Tile type="wood" />
    </div>
  );
};
