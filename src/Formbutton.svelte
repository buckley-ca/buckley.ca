<script>
  /* paste this line in verbatim */
  window.formbutton =
    window.formbutton ||
    function () {
      (formbutton.q = formbutton.q || []).push(arguments);
    };
  /* customize formbutton below*/
  formbutton('create', {
    action: 'https://formspree.io/f/xnqlyaqn',
    title: 'Get in touch',
    fields: [
      {
        type: 'email',
        label: 'Email:',
        name: 'email',
        required: true,
        placeholder: 'your@email.com',
      },
      {
        type: 'textarea',
        label: 'Message:',
        name: 'message',
        placeholder: "What's on your mind?",
      },
      {
        type: 'submit',
        value: 'Submit'
      },
    ],
    styles: {
      title: {
        backgroundColor: 'gray',
      },
      button: {
        backgroundColor: 'gray',
      },
    },
  });
</script>

<svelte:head>
  <script defer src="https://formspree.io/js/formbutton-v1.min.js"></script>
</svelte:head>
