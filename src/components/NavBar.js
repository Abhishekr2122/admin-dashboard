import "./NavBar.css";
import { PiTrashSimpleThin } from "react-icons/pi";

export default function NavBar() {
  return (
    <header className="navbar">
      <form className="form">
        <input className="input" type="text" placeholder="Search..." />
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
