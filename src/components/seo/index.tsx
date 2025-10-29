import { useHead } from "@unhead/react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "music.album" | "music.song" | "profile";
  jsonLd?: object;
}

const SEO = ({
  title = "Ryland - Official Website",
  description = "Official website of Ryland - Listen to 'I'm Gonna Be Fine EP' now on all platforms. Indie rock band from Los Angeles.",
  image = "https://www.weareryland.com/video-thumbnail.jpg",
  url = "https://www.weareryland.com",
  type = "website",
  jsonLd,
}: SEOProps) => {
  const fullTitle = title.includes("Ryland") ? title : `${title} | Ryland`;

  useHead({
    title: fullTitle,
    meta: [
      { name: "title", content: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "author", content: "Ryland" },
      // Open Graph
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:site_name", content: "Ryland" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
    script: jsonLd
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd),
          },
        ]
      : [],
  });

  return null;
};

export default SEO;
