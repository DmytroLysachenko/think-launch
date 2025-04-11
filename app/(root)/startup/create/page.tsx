import React from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";

const Create = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your Startup here!</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Create;
