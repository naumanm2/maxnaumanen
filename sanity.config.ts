'use client'

import { structureTool } from "sanity/structure";
import { defineConfig } from '@sanity-typed/types'
import { schemaTypes } from "./sanity/schemas";
import {markdownSchema} from 'sanity-plugin-markdown'

import { InferSchemaValues } from '@sanity-typed/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export type SanityValues = InferSchemaValues<typeof sanityConfig>

const sanityConfig = defineConfig({
  basePath: "/studio", // `basePath` must match the route of your Studio
  projectId,
  dataset,
  plugins: [structureTool(), markdownSchema()],
  schema: { types: schemaTypes },
});

export default sanityConfig
