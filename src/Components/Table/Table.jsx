import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete } from "react-icons/ai";
import { userRows } from "../DummyData/DummyData";
import { Link } from "react-router-dom";

export default function Table() {
  const [dataRow, setDataRow] = useState(userRows);
  const handleDelete = (id) => {
    let filterData = dataRow.filter((ele) => {
      return ele.id != id;
    });

    setDataRow(filterData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 210,
      renderCell: (params) => {
        if (!params.row) {
          return <h1>Null</h1>;
        }

        return (
          <>
            <div className="userContainer flex gap-x-2 ">
              {/* left side starts  */}
              <div className="leftSide ">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 "
                  src={params.row.avatar || ""}
                  alt="avatar"
                />
              </div>
              {/* left side endss  */}

              {/* right side starts  */}
              <div className="rightSide self-center">
                <h1>{params.row.user}</h1>
              </div>
              {/* right side endss  */}
            </div>
          </>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        if (!params.row) {
          return <h1>Null</h1>;
        }

        return (
          <>
            <div className="btnContainer p-1 flex gap-x-4 w-[72%]">
              {/* left Side starts  */}
              <div className="leftSIde w-[100%] ">
                <Link to={`/users${params.row.id}`}>
                  <button
                    type="button"
                    className="text-white w-[100%] bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2 "
                  >
                    Edit
                  </button>
                </Link>
              </div>
              {/* left Side endss  */}
              {/* right Side starts  */}
              <div className="rightSIde self-center ">
                <AiFillDelete
                  className="text-3xl cursor-pointer text-red-800"
                  onClick={() => handleDelete(params.row.id)}
                />
              </div>
              {/* right Side endss  */}
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="tableContainer bg-red-500 w-full  h-full">
        <div className="tableWrapper bg-gray-100 h-[100%] m-auto">
          <div style={{ height: "88%", width: "100%" }}>
            <DataGrid
              rows={dataRow}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 8 },
                },
              }}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  );
}
