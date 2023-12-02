import { useAppData } from "../context/TableDataProvider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";
export default function Footer() {
  const { tableData, pageCount, setPageCount } = useAppData();

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

  console.log("This is pageCount", pageCount);
  return (
    <div className="footerdiv">
      <p>0 of 46 rows selected</p>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <p>
          page {pageCount} of {Math.round(tableData.length / 10)}
        </p>
        <div>
          <button
            className="footerbtn"
            disabled={pageCount < 1 ? true : false}
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
                >
                  {i + 1}
                </button>
              );
            }
          })}
          <button
            className="footerbtn"
            disabled={pageCount >= 5 ? true : false}
            onClick={pageincrement}
          >
            <IoIosArrowForward style={{ marginTop: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
