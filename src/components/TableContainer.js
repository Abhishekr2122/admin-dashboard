import "./TableContainer.css";
import TableRow from "./TableRow";
import Footer from "./Footer";
import { useAppData } from "../context/TableDataProvider";

export default function TableContainer() {
  const {
    tableData,
    searchQuery,
    setTableData,
    setSearchQuery,
    isLoading,
    pageCount,
  } = useAppData();

  let resultTableData = tableData.filter(function (citem, i) {
    return i >= (pageCount - 1) * 10 && i < pageCount * 10;
  });

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
                <input type="checkbox" />
              </form>
            </th>
            <th className="tableheader">Name</th>
            <th className="tableheader">Email</th>
            <th className="tableheader">Role</th>
            <th className="tableheader">Actions</th>
          </tr>

          {resultTableData.map(function (citem, i) {
            return <TableRow data={citem} key={i} />;
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
