export default function RowInput({ name }) {
  return (
    <div>
      <form
        onSubmit={function (e) {
          e.preventDefault();
        }}
        style={{ border: "1px solid red" }}
      >
        <input value={name} />
      </form>
    </div>
  );
}
