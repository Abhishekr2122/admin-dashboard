import { useAppData } from "../context/TableDataProvider";
import { useEffect } from "react";
import "./TableContainer.css";
import TableRow from "./TableRow";
import Footer from "./Footer";
import PageMessage from "./PageMessage";

export default function TableContainer() {
  const {
    tableData,
    searchQuery,
    // setTableData,
    // setSearchQuery,
    // isLoading,
    pageCount,
    mainCheckbox,
    setMainCheckbox,
    setSelectedRowArr,
  } = useAppData();

  useEffect(
    function () {
      if (mainCheckbox) {
        setSelectedRowArr(function () {
          return tableData
            .filter(function (citem) {
              return (
                citem.id > (pageCount - 1) * 10 && citem.id <= pageCount * 10
              );
            })
            .map(function (citem) {
              return citem.id;
            });
        });
      } else {
        setSelectedRowArr([]);
      }
    },
    [mainCheckbox, setSelectedRowArr, tableData, pageCount]
  );

  let paginatedTableData = tableData.filter(function (citem, i) {
    return citem.id > (pageCount - 1) * 10 && citem.id <= pageCount * 10;
  });

  let resultedSearchQuery = searchQuery
    .trim()
    .toLowerCase()
    .split(" ")
    .join("");

  let filteredTableData = paginatedTableData.filter(function (citem) {
    let resultedCitemName = citem.name.trim().toLowerCase().split(" ").join("");
    return (
      resultedCitemName.includes(resultedSearchQuery) ||
      citem.email.includes(resultedSearchQuery)
    );
  });

  const finalTableData = searchQuery ? filteredTableData : paginatedTableData;

  if (finalTableData.length === 0) {
    return <PageMessage />;
  }

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <table className="table">
        <tbody>
          <tr className="tablerow">
            <th className="tableheader">
              <form>
                <input
                  type="checkbox"
                  onChange={function () {
                    setMainCheckbox(function (crrMainCheckbox) {
                      return !crrMainCheckbox;
                    });
                  }}
                  checked={mainCheckbox ? "checked" : ""}
                />
              </form>
            </th>
            <th className="tableheader">Name</th>
            <th className="tableheader">Email</th>
            <th className="tableheader">Role</th>
            <th className="tableheader">Actions</th>
          </tr>

          {finalTableData.map(function (citem, i) {
            return <TableRow data={citem} key={i} currentRow={citem.id} />;
          })}
        </tbody>
      </table>
      <Footer finalTableData={finalTableData} />
    </div>
  );
}
