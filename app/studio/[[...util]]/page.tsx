// ./app/studio/[[...tool]]/page.tsx

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import "easymde/dist/easymde.min.css";

export const dynamic = "force-static";

import type { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

// Set the correct `viewport`, `robots` and `referrer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: "Loading Studio...",
};

export const viewport: Viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return (
    <>
      <div className=" [&>*]:h-[9vh] flex-1">
        {/* @ts-ignore */}
        <NextStudio config={config} />
      </div>
    </>
  );
}
