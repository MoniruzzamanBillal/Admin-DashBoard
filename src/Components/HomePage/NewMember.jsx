import React from "react";

export default function NewMember() {
  const userData = [
    {
      img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      name: "billal",
      designaton: "Web developer",
    },
    {
      img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      name: "billal",
      designaton: "Web developer",
    },
    {
      img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      name: "billal",
      designaton: "Web developer",
    },
  ];

  const tableData = [
    {
      img: "https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg",
      name: "moniruzzaman 1",
      date: "2 mar 2023",
      amount: "122$",
      status: "Approved",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png",
      name: "moniruzzaman 2",
      date: "2 may 2023",
      amount: "122$",
      status: "pending",
    },
    {
      img: "https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg",
      name: "moniruzzaman 3",
      date: "2 mar 2023",
      amount: "122$",
      status: "decline",
    },
    {
      img: "https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg",
      name: "moniruzzaman 4",
      date: "2 mar 2023",
      amount: "122$",
      status: "Approved",
    },
  ];

  return (
    <>
      <div className="homeNewUserInfo w-full p-3 mb-5 ">
        <div className="userInfoContainer grid grid-cols-5 gap-4">
          {/* left container starts  */}
          <div className="userInfoLeft bg-white border border-gray-200 rounded-md shadow-lg p-3 col-span-2 ">
            {/* left top starts  */}
            <div className="leftContainerTop mb-3">
              <h1 className="text-xl font-semibold">New Join Members</h1>
            </div>
            {/* left top ends  */}

            {/* left bottom starts  */}
            <div className="leftBottonContainer  h-[54vh] overflow-auto">
              {/* card info starts  */}

              {userData &&
                userData.map((ele, ind) => (
                  <>
                    <div className="leftContainerBottom mb-3 bg-gray-100 p-2 rounded-md grid grid-cols-12 gap-1">
                      <div className="bottomLeftAvatar self-center col-span-2">
                        <img
                          className="w-10 h-10 m-auto rounded-full"
                          src={ele.img}
                          alt="Rounded avatar"
                        />
                      </div>
                      <div className="bottomMid self-center ml-4 col-span-7">
                        <div className="bottomMidContainer">
                          <h2>{ele.name}</h2>

                          <h2> {ele.designaton} </h2>
                        </div>
                      </div>
                      <div className="bottomRight m-auto self-center col-span-3">
                        <button className="py-2 px-4  text-sm font-medium text-gray-900 outline-none bg-cyan-300 rounded-md border border-gray-200 hover:bg-cyan-400 hover:text-gray-800 focus:z-10 ">
                          Display
                        </button>
                      </div>
                    </div>
                  </>
                ))}

              {/* card info ends  */}

              {/* test file starts  */}

              {/* test file ends  */}
            </div>

            {/* left bottom ends  */}
          </div>
          {/* left container Ends  */}

          {/* right container starts  */}
          <div className="userInfoRight bg-gray-50 rounded-md shadow-lg p-2 col-span-3 ">
            <h1 className="text-2xl mb-1">Latest Transactions</h1>
            {/* right container table starts  */}
            <div className="rightContainerTable">
              <div className="relative overflow-x-auto h-[54vh] ">
                <table className="w-full text-sm text-left text-gray-600">
                  <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData &&
                      tableData.map((ele, ind) => (
                        <>
                          <tr className="bg-gray-50 border-b" key={ind}>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
                            >
                              <div className="Name flex gap-x-2 ">
                                <div className="leftName imgDiv">
                                  <img
                                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                    src={ele.img}
                                    alt="Bordered avatar"
                                  />
                                </div>

                                <div className="rightName self-center">
                                  {ele.name}
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-4 date">{ele.date}</td>
                            <td className="px-6 py-4 amount">{ele.amount}</td>
                            <td
                              className={`${
                                ele.status === "Approved"
                                  ? "text-green-600"
                                  : ele.status === "decline"
                                  ? "text-blue-600"
                                  : "text-red-500"
                              }`}
                            >
                              {ele.status}
                            </td>
                          </tr>
                        </>
                      ))}

                    {/* test files starts  */}

                    {/* test files ends  */}
                  </tbody>
                </table>
              </div>
            </div>
            {/* right container table ends  */}
          </div>
          {/* right container ends  */}
        </div>
      </div>
    </>
  );
}
