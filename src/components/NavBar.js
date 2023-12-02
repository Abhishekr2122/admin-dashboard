import { useAppData } from "../context/TableDataProvider";
import "./NavBar.css";
import { PiTrashSimpleThin } from "react-icons/pi";

export default function NavBar() {
  const { searchQuery, setSearchQuery } = useAppData();
  console.log("This is searchQuery", searchQuery);

  function updatesearchquery(inputData) {
    setSearchQuery(inputData.target.value);
  }
  return (
    <header className="navbar">
      <form className="form">
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
        >
          <PiTrashSimpleThin
            style={{
              height: "20px",
              width: "20px",
            }}
          />
        </button>
      </div>
    </header>
  );
}
