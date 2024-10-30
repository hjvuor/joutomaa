import schemas from '@/sanity/schemas'
import { defineConfig } from 'sanity'
//import schemas from "sanity/schemas"
import { structureTool } from "sanity/structure"

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
    dataset: "production",
    apiVersion: "2024-10-21",
    basePath: "/admin",
    plugins: [structureTool()],
    schema : { types: schemas }

})

export default config