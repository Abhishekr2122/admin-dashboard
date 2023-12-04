import Footer from "./Footer";
import "./PageMessage.css";

export default function PageMessage() {
  return (
    <div
      style={{
        border: "1px solid #dddddd",
        height: "600px",
        marginTop: "15px",
        width: "98%",
        marginLeft: "12px",
        borderRadius: "4px",
      }}
    >
      <p className="pagemessage">page not found</p>
      <Footer />
    </div>
  );
}
