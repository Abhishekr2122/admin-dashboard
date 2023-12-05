import { useEffect, useState } from "react";
import { useAppData } from "../context/TableDataProvider";
import toast from "react-hot-toast";

import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

import RowInput from "./RowInput";
import { useDataProvider } from "./TableContainer";

export default function TableRow({ data, currentRow }) {
  const {
    mainCheckbox,
    setMainCheckbox,
    setSelectedRow,
    selectedRow,
    setSelectedRowArr,
    selectedRowArr,
  } = useAppData();

  const { tableData, setCurrentPageData } = useDataProvider();

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  // const [isEditClicked, setIsEditClicked] = useState(false);
  // const [name, setName] = useState(function () {
  //   return data.name;
  // });
  // const [role, setRole] = useState(function () {
  //   return data.role;
  // });
  // const [email, setEmail] = useState(function () {
  //   return data.email;
  // });

  console.log(selectedRowArr);

  useEffect(
    function () {
      setIsCheckboxClicked(function () {
        return mainCheckbox;
      });
    },
    [mainCheckbox]
  );

  useEffect(
    function () {
      setIsCheckboxClicked(false);
      if (selectedRow === currentRow) {
        setIsCheckboxClicked(true);
      }
    },
    [selectedRow, setIsCheckboxClicked, currentRow]
  );

  useEffect(
    function () {
      if (!isCheckboxClicked && selectedRow !== null) {
        if (currentRow === selectedRow) {
          setSelectedRow(null);
          setSelectedRowArr(function (crrArr) {
            return crrArr.filter(function (citem) {
              return citem !== selectedRow;
            });
          });
        }
      }

      if (isCheckboxClicked) {
        setSelectedRowArr(function (crrArr) {
          return [...new Set([selectedRow, ...crrArr])];
        });
      }
    },
    [
      isCheckboxClicked,
      currentRow,
      selectedRow,
      setSelectedRowArr,
      setSelectedRow,
    ]
  );

  function edit(crrSelectedRow) {
    setSelectedRow(crrSelectedRow);
    setMainCheckbox(false);
    setSelectedRowArr(function (crrArr) {
      return crrArr.filter(function (citem) {
        return selectedRowArr.includes(citem.id);
      });
    });
  }

  function deleterow(clickedRow) {
    setCurrentPageData(function (crrpagedata) {
      return crrpagedata.filter(function (citem, i) {
        return citem.id !== clickedRow;
      });
    });

    toast.success("Row successfully deleted");
  }

  return (
    <tr
      className={`tablerow ${
        selectedRowArr.includes(currentRow) || isCheckboxClicked
          ? "tablerowactive"
          : ""
      }`}
    >
      <td className="tabledata">
        <form>
          <input
            type="checkbox"
            onChange={function () {
              setIsCheckboxClicked(function (crrCheckboxClicked) {
                return !crrCheckboxClicked;
              });
              setSelectedRow(currentRow);
            }}
            checked={selectedRowArr.includes(currentRow)}
          />
        </form>
      </td>
      <td className="tabledata">{data.name}</td>
      <td className="tabledata">{data.email}</td>
      <td className="tabledata">{data.role}</td>
      <td className="tabledata">
        <button
          style={{ marginRight: "8px", cursor: "pointer", borderRadius: "2px" }}
          className={`btn `}
          onClick={function () {
            edit(currentRow);
          }}
          disabled={!isCheckboxClicked}
        >
          <FaRegEdit
            style={{
              color: `${
                selectedRowArr.includes(currentRow) ? "orange" : "black"
              }`,
              transitionDuration: "1s",
            }}
          />
        </button>
        <button
          className="btn"
          style={{ cursor: "pointer", borderRadius: "2px" }}
          onClick={function () {
            deleterow(currentRow);
          }}
          disabled={selectedRowArr.includes(currentRow) ? false : true}
        >
          <MdOutlineDelete
            style={{
              color: `${selectedRowArr.includes(currentRow) ? "red" : "black"}`,
              transitionDuration: "1s",
            }}
          />
        </button>
      </td>
    </tr>
  );
}
