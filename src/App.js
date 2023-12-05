import "./App.css";
import NavBar from "../src/components/NavBar";
import TableContainer from "./components/TableContainer";
import TableDataProvider from "./context/TableDataProvider";
import { Toaster } from "react-hot-toast";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <TableDataProvider>
      <DataProvider>
        <NavBar />
        <TableContainer />
      </DataProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "6px" }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "lightyellow",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </TableDataProvider>
  );
}

export default App;
