import "./TableContainer.css";
import { useEffect, useState } from "react";

export default function TableContainer() {
  const [tableContainer, setTablecontainer] = useState([]);
  useEffect(function () {
    async function getData() {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );

      const data = await res.json();
    }

    getData();
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <table className="table">
        <tr>
          <th className="tableheader">checkbox</th>
          <th className="tableheader">Name</th>
          <th className="tableheader">Email</th>
          <th className="tableheader">Role</th>
          <th className="tableheader">Actions</th>
        </tr>
      </table>
    </div>
  );
}
