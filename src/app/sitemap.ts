import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/produtos",
    "/nossa-historia",
    "/qualidade",
    "/distribuidores",
    "/representantes",
    "/seja-um-vendedor",
    "/seja-um-distribuidor",
    "/area-comercial",
    "/onde-encontrar",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/produtos/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries];
}
