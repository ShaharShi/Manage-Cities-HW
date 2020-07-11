const cardsContainer = $("#cardsContainer");

$("#cityForm").on("submit", (e) => {
  e.preventDefault();
  const cityNameVal = $("#cityName").val();
  const cityImgVal = $("#cityImg").val();

  formValidation(cityNameVal, cityImgVal);
});

function formValidation(cityNameVal, cityImgVal) {
  if (cityImgVal === "" || cityImgVal.length === 0) return;

  draw(cityNameVal, cityImgVal);
}

function draw(cityNameVal, cityURL) {
  const cardItem = getCardItem(cityNameVal, cityURL);

  cardsContainer.append(cardItem);
}

function getCardItem(cityNameVal, cityURL) {
  let counterOnUI,
    numOfLikes = 0;
  const cardWrapper = $("<div class='img-thumbnail card-wrapper'></div>");
  const cityImg = $("<img>").attr("src", `${cityURL}`);
  const cityName = $("<p class='city-name'></p>").text(cityNameVal);
  const likeCounter = _getLikeCounter(numOfLikes);
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

  function _getLikeCounter(numOfLikes) {
    const likeCounterWrapper = $("<div class='like-counter'></div>");
    const likeIcon = $("<i class='far fa-heart'></i>");
    counterOnUI = $("<span></span>").text(numOfLikes);

    likeCounterWrapper.append(likeIcon, counterOnUI);

    return likeCounterWrapper;
  }

  function _getLikeBtn() {
    const likeBtnWrapper = $("<div class='like-btn'></div>");
    const likeBtnIcon = $("<i class='far fa-heart pulse-anim'></i>");

    likeBtnIcon.on("click", () => {
      _likesIncreasement();
      likeBtnIcon.removeClass("far").addClass("fas");
      setTimeout(() => {
        likeBtnIcon.removeClass("fas").addClass("far");
      }, 300);
    });

    likeBtnWrapper.append(likeBtnIcon);

    return likeBtnWrapper;
  }

  function _likesIncreasement() {
    numOfLikes++;
    setTimeout(() => {
      counterOnUI.text(numOfLikes);
    }, 2000);
  }
}
