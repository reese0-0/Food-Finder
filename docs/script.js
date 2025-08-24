const checkboxes = document.querySelectorAll(".food-filter");

checkboxes.forEach((cb) => {
  cb.addEventListener("change", handleFilter);
});

function handleFilter() {
  const selectedWords = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const allElements = document.body.querySelectorAll("*");

  allElements.forEach((el) => {
    if (el.children.length === 0 && el.textContent.trim().length > 0) {
      if (
        selectedWords.some((word) => new RegExp(word, "i").test(el.textContent))
      ) {
        el.style.backgroundColor = "lightpink";
      } else {
        el.style.backgroundColor = "";
      }
    }
  });
}


// - ground pork and taco pwder does not work when clicked
// - search bar di pa gumagana