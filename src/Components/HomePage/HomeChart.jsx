import { HideImage, HideSourceSharp } from "@mui/icons-material";

import React, { PureComponent } from "react";
import { GlobalContext } from "../../Context/Context";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HomeChart() {
  const { open, setOpen } = GlobalContext();
  const data = [
    {
      name: "Jan",
      active_user: 100,
    },
    {
      name: "Feb",
      active_user: 300,
    },
    {
      name: "Mar",
      active_user: 280,
    },
    {
      name: "apr",
      active_user: 400,
    },
    {
      name: "may",
      active_user: 300,
    },
    {
      name: "june",
      active_user: 200,
    },
    {
      name: "july",
      active_user: 400,
    },
    {
      name: "sept",
      active_user: 350,
    },
    {
      name: "oct",
      active_user: 205,
    },
    {
      name: "nov",
      active_user: 220,
    },
    {
      name: "dec",
      active_user: 480,
    },
  ];

  return (
    <>
      <div className="graphContainer w-full p-4 mb-5 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100">
        <h1 className="font-semibold text-2xl">Active user details</h1>
        <div className="graph">
          <ResponsiveContainer width="100%" aspect={3 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#111827" />
              <Line type="monotone" dataKey="active_user" />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
