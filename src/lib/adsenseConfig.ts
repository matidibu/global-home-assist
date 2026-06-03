// AdSense slot configuration
// Get these values from your AdSense account: https://adsense.google.com/
// Go to Ads → Ad units to find your slot IDs

export const ADSENSE_SLOTS = {
  // Homepage - banner ad between hero and content
  homepage: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOMEPAGE || '1234567890',

  // Destination pages - in-content ad (middle of page)
  destinationContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DESTINATION || '2345678901',

  // Blog page - leaderboard ad
  blogList: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST || '3456789012',

  // Blog post - in-article ad
  blogPost: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST || '4567890123',
};
