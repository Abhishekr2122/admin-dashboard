import { createContext, useContext, useEffect, useState } from "react";

const appData = createContext();

export default function TableDataProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [pageCount, setPageCount] = useState(1);
  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowArr, setSelectedRowArr] = useState([]);

  return (
    <appData.Provider
      value={{
        searchQuery,
        setSearchQuery,
        pageCount,
        setPageCount,
        mainCheckbox,
        setMainCheckbox,
        selectedRow,
        setSelectedRow,
        selectedRowArr,
        setSelectedRowArr,
      }}
    >
      {children}
    </appData.Provider>
  );
}

export function useAppData() {
  const data = useContext(appData);
  return data;
}
