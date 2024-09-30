var getLikeButton = document.getElementById("likeButton");
var getLikeCount = document.getElementById("likeCount");

getLikeButton.addEventListener("click", function() {
    getLikeCount.innerText = parseInt(getLikeCount.innerText) + 1;
});