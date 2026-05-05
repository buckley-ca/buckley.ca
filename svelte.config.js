import adapter from "@sveltejs/adapter-auto";
// Using adaptor-auto due to deployments to both  Cloudflare and Vercel.

export default {
  kit: {
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
  },
};
