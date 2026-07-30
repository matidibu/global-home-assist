// AdSense slot configuration
// Get these values from your AdSense account: https://adsense.google.com/
// Go to Ads → Ad units to find your slot IDs

// Empty string (not a placeholder number) so AdSenseUnit renders nothing until
// a real slot ID is set — a fake numeric ID would push invalid ad requests in prod.
export const ADSENSE_SLOTS = {
  // Homepage - banner ad between hero and content
  homepage: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOMEPAGE || '',

  // Destination pages - in-content ad (middle of page)
  destinationContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DESTINATION || '',

  // Blog page - leaderboard ad
  blogList: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST || '',

  // Blog post - in-article ad
  blogPost: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST || '',
};
