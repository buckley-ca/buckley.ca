// Single source of truth for the page background, which is the largest
// (LCP) element on every page. Layout.astro uses these values both to preload
// the image and to paint it in CSS, so the two URLs can never differ (a
// mismatch would download the image twice).

const CLOUDINARY = "https://res.cloudinary.com/buckey-ca/image/upload";
const ASSET = "background-1600_ovnjor.jpg";

/** Origin the background is served from, for <link rel="preconnect">. */
export const BACKGROUND_ORIGIN = "https://res.cloudinary.com";

/**
 * Widths at or below this (px) get the narrower mobile crop. CSS media
 * queries can't read JS values, so the same number is repeated in the
 * `@media (max-width: 640px)` rule in Layout.astro. Keep them in step.
 */
export const BACKGROUND_MOBILE_MAX = 640;

/**
 * Media queries for the two preloads. Every viewport width must match exactly
 * one of them. The desktop query is written as "not mobile" rather than
 * `min-width: 641px`, because widths can be fractional (e.g. 640.5px) and
 * would otherwise match neither.
 */
export const BACKGROUND_MOBILE_MEDIA = `(max-width: ${BACKGROUND_MOBILE_MAX}px)`;

export const BACKGROUND_DESKTOP_MEDIA = `not all and ${BACKGROUND_MOBILE_MEDIA}`;

export const BACKGROUND_MOBILE = `${CLOUDINARY}/f_auto,q_auto,c_fill,w_800,dpr_auto/${ASSET}`;

export const BACKGROUND_DESKTOP = `${CLOUDINARY}/f_auto,q_auto,dpr_auto/${ASSET}`;
