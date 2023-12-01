import "./App.css";
import NavBar from "../src/components/NavBar";
import TableContainer from "./components/TableContainer";
import TableDataProvider from "./context/TableDataProvider";

function App() {
  return (
    <TableDataProvider>
      <NavBar />
      <TableContainer />
    </TableDataProvider>
  );
}

export default App;
