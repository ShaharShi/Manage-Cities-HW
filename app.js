const cardsContainer = $("#cardsContainer");

$("#cityForm").on("submit", (e) => {
  e.preventDefault();
  const cityNameVal = $("#cityName").val();
  const cityImgVal = $("#cityImg").val();

  draw(cityNameVal, cityImgVal);
});

function draw(cityNameVal, cityURL) {
  const cardItem = getCardItem(cityNameVal, cityURL);

  cardsContainer.append(cardItem);
}

function getCardItem(cityNameVal, cityURL) {
  const likeCount = 0;
  const cardWrapper = $("<div class='card card-wrapper'></div>");
  const cityImg = $("<img>").attr("src", `${cityURL}`);
  const cityName = $("<p class='city-name'></p>").text(cityNameVal);
  const likeCounter = _getLikeCounter(likeCount);
  const likeBtn = _getLikeBtn();

  cardWrapper.on("mouseenter", () => {
    cardWrapper.removeClass("card-wrapper");
    cardWrapper.addClass("card-wrapper-hover");
  });
  cardWrapper.on("mouseleave", () => {
    cardWrapper.removeClass("card-wrapper-hover");
    cardWrapper.addClass("card-wrapper");
  });

  cardWrapper.append(cityImg, cityName, likeCounter, likeBtn);
  return cardWrapper;

  function _getLikeCounter(likeCount) {
    const likeCounterWrapper = $("<div class='like-counter'></div>");
    const likeIcon = $("<i class='far fa-heart'></i>");
    const counterOnUI = $("<span></span>").text(likeCount);

    likeCounterWrapper.append(likeIcon, counterOnUI);

    return likeCounterWrapper;
  }
  function _getLikeBtn() {
    const likeBtnWrapper = $("<div class='like-btn'></div>");
    const likeBtnIcon = $("<i class='far fa-heart pulse-anim'></i>");

    likeBtnIcon.on("click", () => {
      likeBtnIcon.removeClass("far");
      likeBtnIcon.addClass("fas");
      setTimeout(() => {
        likeBtnIcon.removeClass("fas");
        likeBtnIcon.addClass("far");
      }, 300);
    });

    likeBtnWrapper.append(likeBtnIcon);

    return likeBtnWrapper;
  }
}
