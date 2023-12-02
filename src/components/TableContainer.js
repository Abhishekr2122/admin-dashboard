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

  let paginatedTableData = tableData.filter(function (citem, i) {
    return i >= (pageCount - 1) * 10 && i < pageCount * 10;
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
  console.log("This is the resultedSearchQuery", resultedSearchQuery);

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

          {finalTableData.map(function (citem, i) {
            return <TableRow data={citem} key={i} />;
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
