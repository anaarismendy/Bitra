import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { postSchema } from './sanity/schemas/post'
import { casoSchema } from './sanity/schemas/caso'

export default defineConfig({
  name: 'bitra',
  title: 'Bitra Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postSchema, casoSchema],
  },
})
