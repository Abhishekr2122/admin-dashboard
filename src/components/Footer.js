import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerdiv">
      <p>0 of 46 rows selected</p>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <p>page 1 of 5</p>
        <div>
          <button className="footerbtn">1</button>
          <button className="footerbtn">2</button>
          <button className="footerbtn">3</button>
        </div>
      </div>
    </div>
  );
}
