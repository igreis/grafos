import React, { useState, useMemo } from "react";
import { useTable } from "react-table";

const CheckboxTable = () => {
  // Defina os dados da tabela (matriz booleana)
  const [data, setData] = useState([
    { param1: true, param2: false, param3: true },
    { param1: false, param2: true, param3: false },
    { param1: true, param2: false, param3: true }
  ]);

  // Defina as colunas da tabela
  const columns = useMemo(
    () => [
      {
        Header: "Parameter 1",
        accessor: "param1",
        Cell: CheckboxCell // Componente de célula editável (checkbox)
      },
      {
        Header: "Parameter 2",
        accessor: "param2",
        Cell: CheckboxCell
      },
      {
        Header: "Parameter 3",
        accessor: "param3",
        Cell: CheckboxCell
      }
    ],
    []
  );

  // Função para atualizar os dados quando um checkbox for editado
  const updateMyData = (rowIndex, columnId, value) => {
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value
          };
        }
        return row;
      })
    );
  };

  // Hook do React Table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    updateMyData
  });

  return (
    <table {...getTableProps()} style={{ border: "1px solid black", width: "100%", textAlign: "center" }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{ padding: "10px", border: "1px solid black" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{ padding: "10px", border: "1px solid black" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Componente para células com checkbox
const CheckboxCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData
}) => {
  // Função para lidar com a mudança de estado do checkbox
  const handleChange = e => {
    updateMyData(index, id, e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={initialValue}
      onChange={handleChange}
    />
  );
};

export default CheckboxTable;
