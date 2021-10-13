<script>
  export let site_name;
  export let tld;
  import Logo from './Logo.svelte';
</script>

<main class="background center">
  <div class="container">
    <Logo />
    <h1>{site_name}<span>.{tld}</span></h1>
  </div>
</main>

<style>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    text-align: center;
  }

  .background {
    background: url(https://res.cloudinary.com/buckey-ca/image/upload/v1634141535/background-1600_ovnjor.jpg) fixed no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    /* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale'); */
    /* -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale')"; */
  }

  h1 {
    color: #f2f2f2;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 600;
    position: relative;
    margin:0;
    text-shadow: 0.4px 0.8px 0.8px hsl(0deg 0% 0% / 0.49);
  }

  h1 span {
    font-size: 2rem;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
