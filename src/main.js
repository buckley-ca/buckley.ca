import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    site_name: 'buckley',
    tld: 'ca',
  },
});

export default app;
