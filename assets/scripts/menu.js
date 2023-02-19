// Get the nav menu and the button
const bBButton = document.querySelector(".burger-bun");
const menu = document.querySelector(".menu");
const call = document.querySelector(".call");

console.log(bBButton);
// console.log(menu);
// console.log(socialsH);
// Add a click event listener to the button
bBButton.addEventListener("click", () => {
  // Toggle the 'open' class on the nav menu
  console.log("CLICK !!");
  menu.classList.toggle("open");
  call.classList.toggle("open");
});
