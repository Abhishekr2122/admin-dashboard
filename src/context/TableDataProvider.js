import { createContext, useContext, useEffect, useState } from "react";

const appData = createContext();

export default function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowArr, setSelectedRowArr] = useState([]);

  useEffect(function () {
    async function getData() {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await res.json();
      setTableData(data);
      setIsLoading(false);
    }

    getData();
  }, []);
  return (
    <appData.Provider
      value={{
        tableData,
        searchQuery,
        setTableData,
        setSearchQuery,
        isLoading,
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
