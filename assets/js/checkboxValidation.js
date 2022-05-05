function checkboxValidationFunction() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length == 0) {
    const element = document.querySelector("form");
    element.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Form submission cancelled.");
    });
    alert("At least one checkbox must be selected.");
  }
}
