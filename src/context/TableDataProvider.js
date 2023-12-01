import { Children, createContext, useState } from "react";

const appData = createContext();

export default function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <appData.Provider value={{ tableData, searchQuery }}>
      {children}
    </appData.Provider>
  );
}
