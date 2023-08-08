// Fetches the metadata for an NFT from the OpenSea API.
async function fetchNFTMetadata(asset_contract_address, token_id) {
  try {
    // Send a GET request to the OpenSea API.
    const response = await fetch(`https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/`);
    
    // If the response is not okay, throw an error.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Return the response as JSON.
    return await response.json();
  } catch (error) {
    // Log any errors that occur.
    console.error(error);
    return null;
  }
}

// Creates a typing effect on a given DOM element.
async function typingEffect(element, text, delay, fadeOut = false) {
  for (let i = 0; i < text.length; i++) {
    // Pause for the specified delay before proceeding.
    await new Promise(resolve => setTimeout(resolve, delay));
    // Add the next character to the textContent of the element.
    element.textContent += text[i];
  }

  // If the fadeOut parameter is true, fade out the text after it's done typing.
  if (fadeOut) {
    element.style.transition = "opacity 5s";
    element.style.opacity = 0;
    setTimeout(() => element.style.display = 'none', 30000);
  }
}

// Fetches NFT data and displays it on the page.
async function displayNFT(asset_contract_address, token_id) {
  // Fetch the NFT data.
  const nftData = await fetchNFTMetadata(asset_contract_address, token_id);

  if (!nftData) {
    console.error(`Failed to fetch data for token_id: ${token_id}`);
    return;
  }
  
  // Destructure the data we want from the nftData object.
  const {image_original_url, image_url, name, description} = nftData;

  const image = image_original_url || image_url;
  
  // Create URLs for the NFT on various platforms.
  const openseaLink = `https://opensea.io/assets/${asset_contract_address}/${token_id}`;
  const raribleLink = `https://rarible.com/token/${asset_contract_address}:${token_id}`;
  const manifoldLink = `https://manifold.xyz/asset/${asset_contract_address}/${token_id}`;

  // Get DOM elements to display the NFT data.
  const elements = {
    img: document.getElementById('nft-img'),
    title: document.getElementById('nft-title'),
    description: document.getElementById('nft-description'),
    opensea: document.getElementById('opensea-link'),
    rarible: document.getElementById('rarible-link'),
    manifold: document.getElementById('manifold-link')
  };

  // Set the src and alt attributes for the img element.
  elements.img.src = image;
  elements.img.alt = name;
  document.getElementById('nft-img-link').href = image;

  elements.title.textContent = '';
  elements.title.classList.add('glitch');
  elements.title.setAttribute("data-text", name);

  elements.description.textContent = ''; 

  // Set the href attributes for the link elements.
  elements.opensea.href = openseaLink;
  elements.rarible.href = raribleLink;
  elements.manifold.href = manifoldLink;

  // Apply the typing effect to the title and description elements.
  await typingEffect(elements.title, name, 70, true);
  await typingEffect(elements.description, description, 30);
}

// When the window is loaded, fetch and display the NFT data.
window.onload = function() {
// Get the token_id parameter from the URL.
const tokenId = new URLSearchParams(window.location.search).get('token_id');
// Call the displayNFT function with the contract address and token id.
displayNFT('0xe7Eb1E4AEa7AC03687c1F159b1bdf2d9d29b90dE', tokenId);
};
