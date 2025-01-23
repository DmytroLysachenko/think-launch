import React from "react";

import { redirect } from "next/navigation";
import { isProduction } from "@/lib/utils";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  if (isProduction) return redirect("/");
  return children;
};

export default Layout;
