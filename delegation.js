const itemList = document.getElementById("itemList");
const myList = document.getElementById("myList");
const addItemButton = document.getElementById("addItem");

// Function to handle item clicks
function handleItemClick(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
    // Perform actions based on the clicked item
  }
}

// Event delegation - listen for clicks on the list container
myList.addEventListener("click", handleItemClick);

// Function to add a new item to the list
function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "Item " + (myList.childElementCount + 1);
  myList.appendChild(newItem);
}

// Event listener for adding new items
addItemButton.addEventListener("click", addItem);

// Function to remove the last item from the list
function removeItem() {
  const lastItem = myList.lastElementChild;
  if (lastItem) {
    myList.removeChild(lastItem);
  }
}

// Simulating the removal of an item after 3 seconds
setTimeout(removeItem, 3000);
