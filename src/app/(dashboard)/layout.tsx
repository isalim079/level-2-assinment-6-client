/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

const LoginLayout = ({ children }: { children: any }) => {
  return (
    <div className="grid grid-cols-12 p-12 h-screen gap-10">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default LoginLayout;
