window.addEventListener('m-authenticated', async (event) => {
  // a Manafold Data Client will be provided in the event details
  const client = event.detail.client;
  const token = client.token;
  // do something
})