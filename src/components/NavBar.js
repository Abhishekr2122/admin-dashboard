import toast from "react-hot-toast";
import { useAppData } from "../context/TableDataProvider";
import "./NavBar.css";
import { PiTrashSimpleThin } from "react-icons/pi";

export default function NavBar() {
  const {
    searchQuery,
    setSearchQuery,
    mainCheckbox,
    selectedRowArr,
    setTableData,
    setSelectedRowArr,
  } = useAppData();

  function updatesearchquery(inputData) {
    setSearchQuery(inputData.target.value);
  }
  return (
    <header className="navbar">
      <form
        className="form"
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={function (e) {
            e.preventDefault();
            updatesearchquery(e);
          }}
        />
      </form>
      <div>
        <button
          style={{
            marginRight: "15px",
            backgroundColor: "tomato",
            borderRadius: "6px",
            height: "40px",
            width: "45px",
            border: "1px solid white",
            cursor: "pointer",
          }}
          disabled={selectedRowArr.length > 1 ? false : true}
          onClick={function () {
            setTableData(function (crrArr) {
              return crrArr.filter(function (citem) {
                return !selectedRowArr.includes(citem.id);
              });
            });

            toast.success(
              `${
                selectedRowArr.length > 1
                  ? `${selectedRowArr.length} rows successfully deleted`
                  : `1 row successfully deleted`
              }`
            );
          }}
        >
          <PiTrashSimpleThin
            style={{
              height: "20px",
              width: "20px",
              color: `${
                mainCheckbox || selectedRowArr.length >= 1 ? "black" : "white"
              }`,
              transitionDuration: "1s",
            }}
          />
        </button>
      </div>
    </header>
  );
}
