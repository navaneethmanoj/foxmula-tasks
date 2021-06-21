import React, { useState } from "react";
import "./Table.css";
import data from "./data.json";

const Table = () => {
  var key = 0;
  return (
    <div>
      <div className="box">
        {data.map((object, index) => {
          key = Object.keys(object)[0];
          return <TableItem week={key} values={object[key]} />;
        })}
      </div>
    </div>
  );
};

const TableItem = (props) => {
  const [open, setOpen] = useState(false);
  const { week, values } = props;
  console.log(props);
  return (
    <div>
      <div className="week-div" onClick={() => setOpen(!open)}>
        <p className="week">
          {week}{" "}
          <span className={open ? "open-arrow" : "close-arrow"}>
            <img src="Vector.svg" />
          </span>
        </p>
      </div>
      <div className={open ? "open-values" : "close-values"}>
        {values.map((value) => (
          <p className="value">{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Table;
