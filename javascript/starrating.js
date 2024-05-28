const stars = document.querySelectorAll(".img img");
const ratingText = document.getElementById("ratingText");
let clickFlag = false; // 標誌是否已經發生點擊事件
let currentRating = 0; // 用於存儲當前的評分

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
    updateRatingText(index + 1); // 更新顯示的星星數
  }
}

function mouseout(index) {
  if (!clickFlag) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].src = "./images/S__277135365.jpg";
    }
    updateRatingText(currentRating); // 重置顯示的星星數
  }
}

function onclick(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].src = "./images/S__277143554.jpg";
  }
  clickFlag = true; // 設置標誌為 true，以防止 mouseout 改變圖片
  currentRating = index + 1; // 保存當前評分
  updateRatingText(currentRating); // 更新顯示的星星數
}

function dbclick(index) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].src = "./images/S__277135365.jpg";
  }
  clickFlag = false; // 在雙擊時重置標誌
  currentRating = 0; // 重置當前評分
  updateRatingText(currentRating); // 重置顯示的星星數
}

function updateRatingText(rating) {
  ratingText.textContent = `您目前給予${rating}分`;
}
