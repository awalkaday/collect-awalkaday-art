window.addEventListener('m-authenticated', async (event) => {
        // Get the data client instance
        const client = event.detail.client;

        // Get the NFTs owned by the currently connected wallet
        const tokens = await client.getNFTsOfOwner();
        const h2 = document.createElement("h2");
        h2.innerHTML = "Your NFTs";
        document.getElementById("nfts").appendChild(h2)
        // Create a div element for each token you own
        for (let i = 0; i < tokens.length; i++) {
          const img = document.createElement("img");
          img.src = tokens[i].image;
          img.height = 200;
          img.width = 200;
          document.getElementById("nfts").appendChild(img);
        }
      })
      window.addEventListener('m-unauthenticated', async (event) => {
        document.getElementById("nfts").innerHTML = "";