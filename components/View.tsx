import React from "react";
import { unstable_after as after } from "next/server";

import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
  const response = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS, { id });

  const totalViews = response?.views || 0;

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
