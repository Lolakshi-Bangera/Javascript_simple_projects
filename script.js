const gameContainer = document.getElementById("gameContainer");
let firstCard = null;
let secondCard = null;
let canClick = true;

// An array of pairs of card values
const cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];

// Shuffle the cards
cards.sort(() => Math.random() - 0.5);

// Function to create cards and add click event listeners
function createCard(value) {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.textContent = value;

  card.addEventListener("click", () => {
    if (
      !canClick ||
      card === firstCard ||
      card.classList.contains("selected")
    ) {
      return;
    }
    console.log("first");
    card.classList.remove("hidden");
    console.log(firstCard, secondCard);
    if (!firstCard) {
      console.log("first in");
      firstCard = card;
      firstCard.classList.add("selected");
    } else if (!secondCard) {
      console.log("second  in");
      secondCard = card;
      secondCard.classList.add("selected");

      canClick = false;

      // Check for a match after a short delay
      setTimeout(() => {
        if (firstCard.textContent === secondCard.textContent) {
          firstCard.removeEventListener("click", null);
          secondCard.removeEventListener("click", null);
          firstCard = null;
          secondCard = null;
          if (document.querySelectorAll(".selected").length === cards.length) {
            alert("Congratulations! You matched all pairs.");
          }
          console.log("first in==secomnd");
        } else {
          firstCard.classList.add("hidden");
          secondCard.classList.add("hidden");
          firstCard.classList.remove("selected");
          secondCard.classList.remove("selected");
          firstCard = null;
          secondCard = null;
          console.log("first in!==secomnd");
        }
        canClick = true;
      }, 500);
      console.log("canclick", canClick);
    }
  });

  return card;
}

// Create and append cards to the game container
cards.forEach((value) => {
  const card = createCard(value);
  gameContainer.appendChild(card);
});
function generatePalindrome(input) {
  let palindrome = input;

  let i = input.length - 1; // Starting from the second last character

  while (i >= 0) {
    console.log(input[i]);
    palindrome += input[i];
    i--;
  }

  return palindrome;
}

const input = "abcd";
const palindrome = generatePalindrome(input);
console.log(palindrome, "palindrome");
