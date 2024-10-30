import { ClientPerspective } from "next-sanity";

const config= {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2024-10-22",
	useCdn: false,
	perspective: 'published' as ClientPerspective,
};
export default config;