import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useAppData } from "../context/TableDataProvider";
import toast from "react-hot-toast";

export default function TableRow({ data, currentRow }) {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [name, setName] = useState(function () {
    return data.name;
  });
  const [role, setRole] = useState(function () {
    return data.role;
  });
  const [email, setEmail] = useState(function () {
    return data.email;
  });
  const { setTableData, mainCheckbox } = useAppData();

  function edit() {
    setIsEditClicked(function (crrEditStatus) {
      return !crrEditStatus;
    });
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
      <td className="tabledata">
        {isEditClicked ? <p>dadadga</p> : data.name}
      </td>
      <td className="tabledata">{isEditClicked ? <p>dadad</p> : data.email}</td>
      <td className="tabledata">
        {isEditClicked ? <p>addaada</p> : data.role}
      </td>
      <td className="tabledata">
        <button
          style={{ marginRight: "8px", cursor: "pointer", borderRadius: "2px" }}
          className={`btn ${isEditClicked ? "tableroweditbtnactive" : ""}`}
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
