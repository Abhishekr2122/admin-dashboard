import "./TableContainer.css";
import TableRow from "./TableRow";
import Footer from "./Footer";
import { useAppData } from "../context/TableDataProvider";

export default function TableContainer() {
  const { tableData, searchQuery, setTableData, setSearchQuery, isLoading } =
    useAppData();

  console.log("this is is loading", isLoading);

  //   const [tableContainer, setTablecontainer] = useState([]);
  //   useEffect(function () {
  //     async function getData() {
  //       const res = await fetch(
  //         "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  //       );

  //       const data = await res.json();
  //       setTablecontainer(data);
  //     }

  //     getData();
  //   }, []);

  //   if (isLoading) {
  //     return <p>isLoading...</p>;
  //   }

  return (
    <div style={{ marginTop: "10px" }}>
      <table className="table">
        <tbody>
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

          {tableData.map(function (citem, i) {
            return <TableRow data={citem} key={i} />;
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
