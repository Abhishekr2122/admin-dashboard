import { useEffect, useState } from "react";
import { useAppData } from "../context/TableDataProvider";
import toast from "react-hot-toast";

import { FaRegEdit } from "react-icons/fa";
import { CgArrowRightR } from "react-icons/cg";
import { MdOutlineDelete } from "react-icons/md";

import RowInput from "./RowInput";
import { useDataProvider } from "../context/DataProvider";

export default function TableRow({ data, currentRow }) {
  const { setMainCheckbox } = useAppData();

  const {
    setCurrentPageData,
    selectedRowArr,
    setSelectedRowArr,
    selectedRow,
    setSelectedRow,
  } = useDataProvider();

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(function () {
    return false;
  });

  const [currentEditRow, setCurrentEditRow] = useState(null);

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

  // console.log(isCheckboxClicked);
  console.log(selectedRowArr);
  console.log(selectedRow);

  useEffect(
    function () {
      if (
        isCheckboxClicked &&
        selectedRow !== null &&
        currentEditRow === null
      ) {
        setSelectedRowArr(function (crrSelectedRowArr) {
          return [selectedRow, ...crrSelectedRowArr];
        });

        setIsCheckboxClicked(false);
        setSelectedRow(null);
      }
    },
    [
      isCheckboxClicked,
      selectedRow,
      selectedRowArr,
      setSelectedRowArr,
      setSelectedRow,
      currentEditRow,
    ]
  );

  useEffect(
    function () {
      if (
        isCheckboxClicked === false &&
        selectedRowArr.includes(selectedRow) &&
        currentEditRow === null
      ) {
        setSelectedRowArr(function (crrSelectedRowArr) {
          return crrSelectedRowArr.filter(function (citem) {
            return citem !== selectedRow;
          });
        });
      }
    },
    [
      isCheckboxClicked,
      setSelectedRowArr,
      selectedRowArr,
      selectedRow,
      currentEditRow,
    ]
  );

  useEffect(
    function () {
      if (currentEditRow !== null) {
        setSelectedRowArr(function (crrSelectedRow) {
          return crrSelectedRow.filter(function (citem) {
            return citem === currentEditRow;
          });
        });

        setMainCheckbox(false);
      }
    },
    [currentEditRow, setSelectedRowArr, setMainCheckbox]
  );

  function edit(crrSelectedRow) {
    setCurrentEditRow(crrSelectedRow);
  }

  function deleterow(clickedRow) {
    setCurrentPageData(function (crrpagedata) {
      return crrpagedata.filter(function (citem, i) {
        return citem.id !== clickedRow;
      });
    });

    setSelectedRowArr(function (crrSelectedRowArr) {
      return crrSelectedRowArr.filter(function (citem) {
        return citem !== clickedRow;
      });
    });

    setSelectedRow(null);

    toast.success("Row successfully deleted");
  }

  return (
    <tr
      className={`tablerow ${
        selectedRowArr.includes(currentRow)
          ? currentEditRow === currentRow
            ? "edittablerow"
            : "tablerowactive"
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
          disabled={selectedRowArr.includes(currentRow) ? false : true}
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
        <button
          className="btn"
          style={{
            marginLeft: "8px",
            cursor: "pointer",
            borderRadius: "2px",
          }}
        >
          <CgArrowRightR
            style={{
              color: `${
                selectedRowArr.includes(currentRow) ? "green" : "black"
              }`,
              transitionDuration: "1s",
            }}
          />
        </button>
      </td>
    </tr>
  );
}
