import { useAppData } from "../context/TableDataProvider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";

export default function Footer({ paginatedTableData }) {
  const {
    tableData,
    pageCount,
    setPageCount,
    searchQuery,
    mainCheckbox,
    selectedRowArr,
  } = useAppData();

  function pagecountupdate(pageNumber) {
    setPageCount(pageNumber);
  }

  function pageincrement() {
    if (pageCount < Math.round(tableData.length / 10)) {
    }
    setPageCount(function (currentPageCount) {
      return currentPageCount + 1;
    });
  }

  function pagedecrement() {
    if (pageCount > 1) {
      setPageCount(function (currentPageCount) {
        return currentPageCount - 1;
      });
    }
  }

  return (
    <div className="footerdiv">
      <p style={{ marginLeft: "4px" }}>
        {mainCheckbox ? paginatedTableData.length : selectedRowArr.length} of{" "}
        {paginatedTableData.length} rows selected
      </p>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <p>
          page {pageCount} of {Math.round(tableData.length / 10)}
        </p>
        <div>
          <button
            className="footerbtn"
            disabled={
              pageCount < 1 ? true : false || searchQuery ? true : false
            }
            onClick={pagedecrement}
          >
            <IoIosArrowBack style={{ marginTop: "2px" }} />
          </button>
          {tableData.map(function (citem, i) {
            if (i >= Math.round(tableData.length / 10)) {
              return null;
            } else {
              return (
                <button
                  className={`footerbtn ${i + 1 === pageCount ? "active" : ""}`}
                  onClick={function () {
                    pagecountupdate(i + 1);
                  }}
                  key={i}
                  disabled={
                    searchQuery
                      ? true
                      : selectedRowArr.length >= 1 || mainCheckbox
                      ? pageCount !== i + 1
                      : false
                  }
                >
                  {i + 1}
                </button>
              );
            }
          })}
          <button
            className="footerbtn"
            disabled={
              pageCount >= 5
                ? true
                : false || searchQuery
                ? true
                : selectedRowArr.length >= 1 || mainCheckbox
                ? true
                : false
            }
            onClick={pageincrement}
          >
            <IoIosArrowForward style={{ marginTop: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
