import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://akene-uzezi.vercel.app", // Replace with your actual live URL
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
