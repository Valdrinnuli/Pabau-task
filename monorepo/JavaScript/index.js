const changeValuesBtn = document.getElementById("changeValuesBtn");
const shuffleValuesBtn = document.getElementById("shuffleValuesBtn");
const showSelectedValuesBtn = document.getElementById("showSelectedValuesBtn");
const formGroup = document.querySelectorAll(".form-group");

// Convert from NodeList to an array
const formGroupArray = [...formGroup];

const isOdd = (number) => {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

const shuffleCheckboxValues = (array) => {
  // Fisher-Yates algorithm
  const shuffledArray = [...array].sort(() => Math.random() - 0.5);
  return shuffledArray;
};

const changeCheckboxValuesToOdd = () => {
  const checkboxes = document.querySelectorAll(
    ".form-group input[type='checkbox']"
  );

  checkboxes.forEach((checkbox, index) => {
    if (isOdd(index + 1)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
};

const onlySelectedCheckboxValues = () => {
  const checkboxes = document.querySelectorAll(
    ".form-group input[type='checkbox']"
  );

  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      checkbox.closest(".form-group").remove();
    }
  });
};

changeValuesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  changeCheckboxValuesToOdd();
});

showSelectedValuesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  onlySelectedCheckboxValues();
});

shuffleValuesBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const shuffledGroups = shuffleCheckboxValues(formGroupArray);
  const formGroupsContainer = document.getElementById("formGroupsContainer");

  formGroupsContainer.innerHTML = "";

  shuffledGroups.forEach((formGroup) => {
    formGroupsContainer.appendChild(formGroup);
  });
});
