import { NextStudio } from "next-sanity/studio";
import { redirect } from "next/navigation";

import config from "@/sanity.config";
import { isProduction } from "@/lib/utils";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  if (isProduction) return redirect("/");
  return <NextStudio config={config} />;
}
