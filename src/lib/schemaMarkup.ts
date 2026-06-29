const BASE_URL = "https://global-home-assist.vercel.app";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Home Assist",
    description: "Planificador de viajes con inteligencia artificial que centraliza toda la información en un solo lugar",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      "https://www.instagram.com/globalhomeassist.app",
      "https://www.tiktok.com/@globalhomeassist.app",
      "https://www.pinterest.com/globalhomeassist",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "globalhomeassist.app@gmail.com",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema(article: {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: number;
  category: string;
}) {
  const url = `${BASE_URL}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: url,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Organization",
      name: "Global Home Assist",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Global Home Assist",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    articleBody: article.excerpt,
    timeToRead: `PT${article.readTime}M`,
    articleSection: article.category,
  };
}

export function generatePlaceSchema(place: {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: place.name,
    description: place.description || `Travel guide for ${place.name}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: place.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: place.latitude,
      longitude: place.longitude,
    },
    url: `${BASE_URL}/destino/${place.name.toLowerCase().replace(/ /g, "-")}`,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Global Home Assist",
    url: BASE_URL,
    description: "Planificador de viajes con IA que centraliza información de destinos, seguridad, hoteles y vuelos",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
