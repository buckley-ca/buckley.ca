// Single source of truth for the page background (the LCP element on both
// pages). Layout.astro uses these both in the <link rel="preload"> tags and in
// the CSS that actually paints them, so the preloaded URL can never drift from
// the painted one — a mismatch would download the image twice instead of once.
//
// The background lives in CSS, which means the browser can't find it until the
// stylesheet has loaded and the layout is built: PageSpeed's "LCP request
// discovery" audit flags exactly that. The preloads below make the request
// discoverable in the initial HTML and mark it fetchpriority="high", so it
// starts on the first connection rather than after the CSS round-trip.

const CLOUDINARY = "https://res.cloudinary.com/buckey-ca/image/upload";
const ASSET = "background-1600_ovnjor.jpg";

/** Origin the background is served from, for <link rel="preconnect">. */
export const BACKGROUND_ORIGIN = "https://res.cloudinary.com";

/**
 * Viewport width (px) at or below which the narrower crop is used. Mirrored by
 * the `@media (max-width: 640px)` rule in Layout.astro — CSS media queries
 * can't read custom properties, so that one number lives in both places. A
 * Playwright test asserts the preload and the painted background agree.
 */
export const BACKGROUND_MOBILE_MAX = 640;

export const BACKGROUND_MOBILE = `${CLOUDINARY}/f_auto,q_auto,c_fill,w_800,dpr_auto/${ASSET}`;

export const BACKGROUND_DESKTOP = `${CLOUDINARY}/f_auto,q_auto,dpr_auto/${ASSET}`;
