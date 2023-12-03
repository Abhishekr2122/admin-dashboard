import "./App.css";
import NavBar from "../src/components/NavBar";
import TableContainer from "./components/TableContainer";
import TableDataProvider from "./context/TableDataProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <TableDataProvider>
      <NavBar />
      <TableContainer />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "6px" }}
        toastOptions={{
          success: { duration: 3000 },
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
