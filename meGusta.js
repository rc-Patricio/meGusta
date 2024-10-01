var getLikeButtons = document.querySelectorAll(".likeButton");
var getLikeCounts = document.querySelectorAll(".likeCount");


getLikeButtons.forEach(function(getLikeButton){
    getLikeButton.addEventListener("click", function() {
        for(var i=0; i<getLikeCounts.length; i++){
            if(getLikeCounts[i].id == getLikeButton.name){
                getLikeCounts[i].innerText = parseInt(getLikeCounts[i].innerText) + 1;
            }
        };
    });
});
