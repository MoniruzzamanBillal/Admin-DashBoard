import { HideSourceSharp } from "@mui/icons-material";
import { Sidebar } from "flowbite-react";
import React from "react";

export default function Test2() {
  return (
    <>
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">Dashboard</Sidebar.Item>
              <Sidebar.Item href="#">Kanban</Sidebar.Item>
              <Sidebar.Item href="#">Inbox</Sidebar.Item>
              <Sidebar.Item href="#">Users</Sidebar.Item>
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sign In</Sidebar.Item>
              <Sidebar.Item href="#">Sign Up</Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">Upgrade to Pro</Sidebar.Item>
              <Sidebar.Item href="#">Documentation</Sidebar.Item>
              <Sidebar.Item href="#">Help</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
