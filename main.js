const countNumber = document.getElementById("CountNumber");
const addButton = document.getElementById("AddButton");
const removeButton = document.getElementById("RemoveButton");
const starDisplay = document.getElementById("StarDisplay");

let count = 0;

const addStar = () => {
  const starContanier = document.createElement("div");
  starContanier.id = "starDiv";
  const starImg = document.createTextNode("★");
  starContanier.appendChild(starImg);
  starDisplay.appendChild(starContanier);
};

const removeStar = () => {
  let lastStar = document.querySelector("#StarDisplay :last-of-type");
  starDisplay.removeChild(lastStar);
};

addButton.onclick = function () {
  count += 1;
  countNumber.innerHTML = count;
  addStar();
};

removeButton.onclick = function () {
  if (count > 0) {
    count -= 1;
    countNumber.innerHTML = count;
    removeStar();
  }
};

// countNumber.innerHTML = 5;
