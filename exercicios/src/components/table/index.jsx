import React, { useState, useMemo } from "react";
import { useTable } from "react-table";

const EditableTable = () => {
  // Defina os dados da tabela e o estado para armazená-los
  const [data, setData] = useState([
    { name: "John Doe", age: 28, email: "john@example.com" },
    { name: "Jane Smith", age: 32, email: "jane@example.com" },
    { name: "Mike Johnson", age: 45, email: "mike@example.com" }
  ]);

  // Defina as colunas da tabela
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // Chave do objeto data
        Cell: EditableCell // Componente de célula editável
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: EditableCell
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: EditableCell
      }
    ],
    []
  );

  // Função para atualizar os dados quando a célula for editada
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
    <table {...getTableProps()} style={{ border: "1px solid black" }}>
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

// Componente para células editáveis
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData
}) => {
  // Estado para armazenar o valor da célula
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    // Atualiza os dados no estado pai
    updateMyData(index, id, value);
  };

  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      style={{ width: "100%" }}
    />
  );
};

export default EditableTable;
