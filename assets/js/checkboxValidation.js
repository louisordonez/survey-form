function checkboxValidationFunction() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length == 0) {
    alert("At least one checkbox must be selected.");
  }
}
