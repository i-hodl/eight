async function fetchNFTMetadata(asset_contract_address, token_id) {
  try {
    const response = await fetch(`https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function typingEffect(element, text, delay, fadeOut = false) {
  for (let i = 0; i < text.length; i++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    element.textContent += text[i];
  }

  if (fadeOut) {
    element.style.transition = "opacity 5s";
    element.style.opacity = 0;
    setTimeout(() => element.style.display = 'none', 30000);
  }
}

async function displayNFT(asset_contract_address, token_id) {
  const nftData = await fetchNFTMetadata(asset_contract_address, token_id);

  if (!nftData) {
    console.error(`Failed to fetch data for token_id: ${token_id}`);
    return;
  }

  const {image_original_url, image_url, name, description} = nftData;

  const image = image_original_url || image_url;

  const openseaLink = `https://opensea.io/assets/${asset_contract_address}/${token_id}`;
  const raribleLink = `https://rarible.com/token/${asset_contract_address}:${token_id}`;
  const manifoldLink = `https://manifold.xyz/asset/${asset_contract_address}/${token_id}`;

  const elements = {
    img: document.getElementById('nft-img'),
    title: document.getElementById('nft-title'),
    description: document.getElementById('nft-description'),
    opensea: document.getElementById('opensea-link'),
    rarible: document.getElementById('rarible-link'),
    manifold: document.getElementById('manifold-link')
  };

  elements.img.src = image;
  elements.img.alt = name;
  document.getElementById('nft-img-link').href = image;
  
  elements.title.textContent = '';
  elements.title.classList.add('glitch');
  elements.title.setAttribute("data-text", name);

  elements.description.textContent = ''; 

  elements.opensea.href = openseaLink;
  elements.rarible.href = raribleLink;
  elements.manifold.href = manifoldLink;
  
  await typingEffect(elements.title, name, 70, true);
  await typingEffect(elements.description, description, 30);
}

window.onload = function() {
  const tokenId = new URLSearchParams(window.location.search).get('token_id');
  displayNFT('0xe7Eb1E4AEa7AC03687c1F159b1bdf2d9d29b90dE', tokenId);
};
