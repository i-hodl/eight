// Collection's description
const fullDescription = `Introducing The ΞIGHT Collection: Ignition Cards – a captivating and innovative card collection that pushes the boundaries of digital art and collectibles. This unique series features a blend of Meta-Extractions and Meta-Genesis characters, each meticulously crafted to redefine the world of digital collectibles. By exploring the intersection of technology, nature, and human experience, The ΞIGHT Collection offers a fresh perspective on the power of digital art.

Each card in the collection showcases a character or object that exists in one of the many dimensions beyond ΞIGHT. Meta-Extractions are reimagined characters or objects from previous works, while Meta-Genesis cards introduce new additions, destined to inspire future creations. These cards are expertly designed, highlighting various styles, angles, and moods, ensuring that no two cards are alike.

The ΞIGHT Collection has a unique twist: Ignition Cards (ERC1155), which are limited-edition collectibles that can be held or burned to redeem different dynamic artworks from the ΞIGHT (ERC721) collection. The required cards to be burned for redemption will be listed in the dynamic artwork description and redemption page, with the Meta-Extraction or Meta-Genesis specified in the card properties.

Each card also features a Depth Level, represented by a series of unique emojis. These emojis indicate the card's scarcity, with rarer cards boasting more valuable Depth Levels. The emojis are a nod to the collection's octopus logo, which has its bottom two arms forming the number eight.

The ΞIGHT Collection delves into themes of emotion, relationships, and the balance between man and nature, reflecting on the human condition. The artist employs digital circles, halftone, and mesh-like elements, emphasizing technology's impact on our lives. Infused with symbolism and mysticism, ΞIGHT encourages viewers to ponder deeper meanings within the visuals.

This innovative collection also offers exclusive cards, only available to current holders of the artist's NFTs. These cards feature a unique property, highlighting their exclusivity and adding another layer of depth to the collection.

Embracing the power of digital art as a medium for self-expression and exploration of the human spirit, The ΞIGHT Collection sets a new standard for digital collectibles. With its compelling blend of Meta-Extractions, Meta-Genesis characters, and unique features, ΞIGHT is a collection that will capture the imagination of collectors and art enthusiasts alike.

Discover the wonders of The ΞIGHT Collection and immerse yourself in a world of captivating digital art, where the lines between technology, nature, and human experience are beautifully blurred. Join the journey and explore the infinite possibilities that await within these imaginative cards.`;

// Description div
const descriptionDiv = document.getElementById('description');

// Typing effect
const typingEffect = async () => {
    for (let i = 0; i < fullDescription.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 10)); // Adjust typing speed here (50ms)
      descriptionDiv.textContent += fullDescription[i];
  
      if (descriptionDiv.textContent.length === fullDescription.length && skipButtonClicked) {
        descriptionDiv.textContent = fullDescription; // Display full text
        break; // Exit the loop
      }
    }
  };
  

// Skip typing and display full description
document.getElementById('skip').addEventListener('click', () => {
  descriptionDiv.textContent = fullDescription;
});

// Go to gallery
document.getElementById('gallery').addEventListener('click', () => {
  window.location.href = "./gallery.html";
});
// Go back to home
document.getElementById('cards').addEventListener('click', () => {
  window.location.href = "./index.html";
});
// View Ignition Cards
document.getElementById('ignition').addEventListener('click', () => {
  window.location.href = "./ignition.html";
});
// Start typing effect
typingEffect();

// Matrix effect
let chars = "⟠Ξ0123456789ihodlchypherart{}();<>!@#$%^&*-_+=[]|\\:.?/△⏎☠︎";
const matrix = document.getElementById('matrix');
const columns = window.innerWidth / 2; // Width of a character is roughly 20px

// Generate span for the matrix
function generateSpan() {
  let span = document.createElement("span");
  span.textContent = chars[Math.floor(Math.random() * chars.length)];
  span.style.animationDelay = `${Math.random() * 2}s`;
  span.style.fontSize = `${Math.random() * 16 + 14}px`;
  span.style.animationDuration = `${Math.random() * 5 + 2}s`;
  return span;
}

for(let i = 0; i < columns; i++) {
  matrix.appendChild(generateSpan());
}
