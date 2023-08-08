// Collection's description
const fullDescription = "ΞIGHT is a compelling collection of digital art, encapsulating the mystical realm that exists within our minds, accessible only to the soul's perceptive eye. This collection is an enchanting blend of abstract symbolism and cryptic encryptions that subtly whisper the language of the subconscious. Each piece serves as a portal, inviting viewers to journey through the intricate labyrinth of the human psyche, unearthing hidden meanings, and experiencing profound emotions. The artist's masterful use of digital circles, halftones, and mesh-like elements reflects our intertwined existence with the digital universe, while the vibrant hues breathe life into these abstract forms. The collection explores a myriad of themes, from personal relationships and emotions to the delicate dance between humanity and nature. Encrypted within the vibrant colors and abstract shapes, the artist has cleverly embedded secret messages that deepen the sense of intrigue and mystery. \"The Eighth Cypher\" is not merely a collection of art, but an immersive experience, a journey of self-discovery that transcends the boundaries of the mind, reaching into the depths of the soul.";

// Description div
const descriptionDiv = document.getElementById('description');

// Typing effect
const typingEffect = async () => {
  for (let i = 0; i < fullDescription.length; i++) {
    if (descriptionDiv.textContent.length === fullDescription.length) break;  // Stop typing if 'Skip' is clicked
    await new Promise(resolve => setTimeout(resolve, 50)); // Adjust typing speed here (50ms)
    descriptionDiv.textContent += fullDescription[i];
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
// Go to gallery
document.getElementById('cards').addEventListener('click', () => {
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
