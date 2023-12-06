export default function RowInput({ value }) {
  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
      }}
      // style={{ border: "1px solid red" }}
    >
      <input
        value={value}
        style={{
          width: "300px",
          height: "30px",
          border: "1px solid #c6b3b3",
          borderRadius: "4px",
        }}
      />
    </form>
  );
}
