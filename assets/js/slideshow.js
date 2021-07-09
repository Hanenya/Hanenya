function showThumbnail(idx) {
    var imgElements = document.querySelectorAll(".slideshow-image-source");
    for(var i=0; i<imgElements.length; i++) {
        if(i == idx) {
            imgElements[i].classList.add("active");
        } else {
            imgElements[i].classList.remove("active");
        }
    }

    var thumbnailElements = document.querySelectorAll(".thumbnail");
    for(var i=0; i<thumbnailElements.length; i++) {
        if(i == idx) {
            thumbnailElements[i].classList.add("active");
        } else {
            thumbnailElements[i].classList.remove("active");
        }
    }
}