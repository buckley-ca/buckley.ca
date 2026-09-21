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

/**
 * Media queries for the two preloads. They must partition *every* width
 * between them: a width matching neither gets no preload at all, and a width
 * matching both preloads an image it won't paint.
 *
 * Hence `not all and` rather than a `min-width` one pixel up. Viewport widths
 * are not integers — a 640.5px viewport (fractional device pixel ratios, a
 * zoomed page, a desktop window dragged to an odd size) satisfies neither
 * `max-width: 640px` nor `min-width: 641px`, so that sliver would paint the
 * desktop background with nothing preloaded. Negating the mobile query instead
 * makes the desktop one its exact complement, with no gap to get wrong.
 */
export const BACKGROUND_MOBILE_MEDIA = `(max-width: ${BACKGROUND_MOBILE_MAX}px)`;

export const BACKGROUND_DESKTOP_MEDIA = `not all and ${BACKGROUND_MOBILE_MEDIA}`;

export const BACKGROUND_MOBILE = `${CLOUDINARY}/f_auto,q_auto,c_fill,w_800,dpr_auto/${ASSET}`;

export const BACKGROUND_DESKTOP = `${CLOUDINARY}/f_auto,q_auto,dpr_auto/${ASSET}`;
