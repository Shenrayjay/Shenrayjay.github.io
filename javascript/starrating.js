const stars = document.querySelectorAll(".img img");
let clickFlag = false; // Flag to determine whether click event has occurred

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => mouseover(index));
  star.addEventListener("mouseout", () => mouseout(index));
  star.addEventListener("click", () => onclick(index));
  star.addEventListener("dblclick", () => dbclick(index));
});

function mouseover(index) {
  if (!clickFlag) {
    for (let i = 0; i <= index; i++) {
      stars[i].src = "./images/S__277143554.jpg";
    }
  }
}

function mouseout(index) {
  if (!clickFlag) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].src = "./images/S__277135365.jpg";
    }
  }
}

function onclick(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].src = "./images/S__277143554.jpg";
  }

  clickFlag = true; // Set the flag to true to prevent mouseout from changing the image
}

function dbclick(index) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].src = "./images/S__277135365.jpg";
  }
  clickFlag = false; // Reset the flag when double-clicking
}
