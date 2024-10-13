/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/shared/Navbar/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const RecipeFeedLayout = async ({ children }: { children: any }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>
      <Navbar session={session} />
      </div>
     <div >
     {children}
     </div>
    </div>
  );
};

export default RecipeFeedLayout;
