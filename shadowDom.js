// Get the container where Shadow DOM will be attached
const container = document.getElementById("container");

// Create a Shadow Root
const shadowRoot = container.attachShadow({ mode: "open" });

// Create elements inside the Shadow DOM
const paragraph = document.createElement("p");
paragraph.textContent = "This is inside the Shadow DOM!";
paragraph.style.color = "blue";

const span = document.createElement("span");
span.textContent = "Span inside Shadow DOM";
span.style.fontWeight = "bold";
// Append elements to the Shadow Root
shadowRoot.appendChild(paragraph);
shadowRoot.appendChild(span);
