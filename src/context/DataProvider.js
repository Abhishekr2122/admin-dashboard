import { createContext, useContext, useEffect, useState } from "react";

const dataProvider = createContext();

export default function DataProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedRowArr, setSelectedRowArr] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPageData, setCurrentPageData] = useState([]);

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
    <dataProvider.Provider
      value={{
        tableData,
        setTableData,
        isLoading,
        setIsLoading,
        currentPageData,
        setCurrentPageData,
        selectedRowArr,
        setSelectedRowArr,
        selectedRow,
        setSelectedRow,
      }}
    >
      {children}
    </dataProvider.Provider>
  );
}

export function useDataProvider() {
  const data = useContext(dataProvider);
  return data;
}
