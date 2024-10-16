/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/shared/Navbar/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const LoginLayout = async ({ children }: { children: any }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      {children}
    </div>
  );
};

export default LoginLayout;
