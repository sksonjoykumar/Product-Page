// Select all html id
const allImg = document.querySelectorAll("#img");
const mainImg = document.getElementById("main-img");

// window.onload function
window.onload = function () {
  mainFunction();
};

// mainFunction function
function mainFunction() {
  allImg.forEach(function (evt) {
    evt.addEventListener("click", function () {
      mainImg.src = evt.src;
    });
  });

  //   for (let i = 0; i < allImg.length; i++) {
  //     allImg[i].addEventListener("click", function () {
  //       mainImg.src = allImg[i].src;
  //     });
  //   }
}
