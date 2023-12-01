import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export default function TableRow({ data }) {
  return (
    <tr className="tablerow">
      <td className="tabledata">
        <form>
          <input type="checkbox" />
        </form>
      </td>
      <td className="tabledata">{data.name}</td>
      <td className="tabledata">{data.email}</td>
      <td className="tabledata">{data.role}</td>
      <td className="tabledata">
        <button style={{ marginRight: "8px" }} className="btn">
          <FaRegEdit />
        </button>
        <button className="btn">
          <MdOutlineDelete style={{ color: "red" }} />
        </button>
      </td>
    </tr>
  );
}
