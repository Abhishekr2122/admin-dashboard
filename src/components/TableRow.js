import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useAppData } from "../context/TableDataProvider";
import toast from "react-hot-toast";

export default function TableRow({ data, currentRow }) {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const { setTableData, tableData, mainCheckbox } = useAppData();
  function edit() {
    console.log("Edit button is being clicked");
  }

  function deleterow(clickedRow) {
    toast.success("Row successfully deleted");

    setTableData(function (crrTableData) {
      return crrTableData.filter(function (citem, i) {
        return i !== clickedRow;
      });
    });
  }

  return (
    <tr className={`tablerow ${isCheckboxClicked ? "tablerowactive" : ""}`}>
      <td className="tabledata">
        <form>
          <input
            type="checkbox"
            onChange={function () {
              setIsCheckboxClicked(function (crrCheckboxClicked) {
                return !crrCheckboxClicked;
              });
            }}
            checked={mainCheckbox ? "checked" : ""}
          />
        </form>
      </td>
      <td className="tabledata">{data.name}</td>
      <td className="tabledata">{data.email}</td>
      <td className="tabledata">{data.role}</td>
      <td className="tabledata">
        <button
          style={{ marginRight: "8px", cursor: "pointer", borderRadius: "2px" }}
          className="btn"
          onClick={edit}
        >
          <FaRegEdit />
        </button>
        <button
          className="btn"
          style={{ cursor: "pointer", borderRadius: "2px" }}
          onClick={function () {
            deleterow(currentRow);
          }}
        >
          <MdOutlineDelete style={{ color: "red" }} />
        </button>
      </td>
    </tr>
  );
}
