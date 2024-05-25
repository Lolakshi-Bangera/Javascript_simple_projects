// An array of image URLs to rotate through
const imageUrls = [
  "https://cdn.stocksnap.io/img-thumbs/960w/christmas-garland_RFRZRPQQAI.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/christmas-gifts_DWSXP7P56I.jpg", // Add more URLs here
  "https://cdn.stocksnap.io/img-thumbs/960w/macro-christmas_BTIHTV2YJR.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/christmas%20ornament-ball_H5R97JJWI7.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/christmas-tree_6Y0RT6WRRM.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/people-kid_M8GLOB3Y9Q.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/christmas%20ball-decoration_9INEXLZEUO.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/flat%20lay-christmas_9CKABK6N9L.jpg",
];

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedUrl = imageUrls[randomIndex];

  // Set the body background image to the selected URL
  document.body.style.backgroundImage = `url('${selectedUrl}')`;
}

// Run the function initially
changeBackgroundImage();

// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 1000); // 10000 milliseconds = 10 seconds
