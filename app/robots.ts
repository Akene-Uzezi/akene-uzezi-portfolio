import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://akene-uzezi.vercel.app/sitemap.xml", // Replace with your actual live URL
  };
}
