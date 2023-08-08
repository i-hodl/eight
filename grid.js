// Fetches the metadata for an NFT from the Rarible API.
async function fetchNFTMetadata(asset_contract_address, token_id) {
  try {
    // Send a GET request to the Rarible API.
    const response = await fetch(`https://api.rarible.org/v0.1/items/ETHEREUM:${asset_contract_address}:${token_id}`);

    // If the response is not okay, throw an error.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Return the response as JSON.
    const data = await response.json();
    return data;
  } catch (error) {
    // Log any errors that occur.
    console.log(error);
    return null;
  }
}

// Fetches NFT data and displays it in a grid on the page.
async function displayNFT(asset_contract_address, token_id) {
  // Fetch the NFT data.
  const nftData = await fetchNFTMetadata(asset_contract_address, token_id);

  if (!nftData) {
    console.log(`Failed to fetch data for token_id: ${token_id}`);
    return;
  }

  // Choose the correct image url and get the name from the NFT data.
  const image_url = nftData.image;
  const name = nftData.meta.name;

  // Create a new div element with class 'nft'.
  const div = document.createElement('div');
  div.className = 'nft';

  // Create a new img element with the src and alt attributes set from the NFT data.
  const img = document.createElement('img');
  img.src = image_url;
  img.alt = name;

  // Create a new h2 element with the textContent set from the NFT data.
  const h2 = document.createElement('h2');
  h2.textContent = name;

  // Append the img and h2 elements to the div.
  div.appendChild(img);
  div.appendChild(h2);

  // Add a click event listener to the div that redirects to a single NFT page.
  div.addEventListener('click', function() {
    window.location.href = `./single.html?token_id=${token_id}`;
  });

  // Append the div to the NFT grid.
  document.getElementById('nft-grid').appendChild(div);
}

// Fetches and displays all NFTs.
async function displayAllNFTs() {
  // Fetch and display NFTs in order by token ID.
  for (let i = 1; i <= 9; i++) {
    await displayNFT('0x8EFe4B3933ACe855230BBe9fA1F3f216Cc409D07', i.toString());
  }
}

// Call the function to display all NFTs when the script loads.
displayAllNFTs();
