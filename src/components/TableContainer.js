import "./TableContainer.css";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Footer from "./Footer";

export default function TableContainer() {
  const [tableContainer, setTablecontainer] = useState([]);
  useEffect(function () {
    async function getData() {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );

      const data = await res.json();
      setTablecontainer(data);
    }

    getData();
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <table className="table">
        <tr className="tablerow">
          <th className="tableheader">
            <form>
              <input type="checkbox" />
            </form>
          </th>
          <th className="tableheader">Name</th>
          <th className="tableheader">Email</th>
          <th className="tableheader">Role</th>
          <th className="tableheader">Actions</th>
        </tr>

        {tableContainer.map(function (citem, i) {
          return <TableRow data={citem} key={i} />;
        })}
      </table>
      <Footer />
    </div>
  );
}
