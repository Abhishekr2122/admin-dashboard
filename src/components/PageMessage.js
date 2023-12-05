import Footer from "./Footer";
import "./PageMessage.css";

export default function PageMessage() {
  return (
    <div
      style={{
        border: "1px solid #c6b3b3",
        height: "600px",
        marginTop: "15px",
        width: "98%",
        marginLeft: "12px",
        borderRadius: "4px",
      }}
    >
      <img
        src="/pagenotfound.png"
        alt="page"
        style={{
          height: "500px",
          width: "90%",
          marginTop: "6px",
          marginLeft: "75px",
        }}
      />

      <Footer />
    </div>
  );
}
