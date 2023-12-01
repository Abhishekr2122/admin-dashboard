import { useState } from "react";
import { useAppData } from "../context/TableDataProvider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";
export default function Footer() {
  const { tableData, pageCount, setPageCount } = useAppData();
  return (
    <div className="footerdiv">
      <p>0 of 46 rows selected</p>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <p>
          page {pageCount} of {Math.round(tableData.length / 10)}
        </p>
        <div>
          <button className="footerbtn">
            <IoIosArrowBack style={{ marginTop: "2px" }} />
          </button>
          {tableData.map(function (citem, i) {
            if (i >= Math.round(tableData.length / 10)) {
              return null;
            } else {
              return <button className="footerbtn">{i + 1}</button>;
            }
          })}
          <button className="footerbtn">
            <IoIosArrowForward style={{ marginTop: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
