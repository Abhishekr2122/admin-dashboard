import Footer from "./Footer";
import "./PageMessage.css";
export default function PageMessage() {
  return (
    <div
      style={{
        border: "1px solid #dddddd",
        height: "500px",
        marginTop: "15px",
        width: "98%",
        marginLeft: "12px",
        borderRadius: "4px",
        backgroundColor: "lightyellow",
      }}
    >
      <p className="pagemessage">
        <h1 style={{ fontSize: "50px" }}>Empty Page 😓</h1>
      </p>
      <Footer />
    </div>
  );
}
