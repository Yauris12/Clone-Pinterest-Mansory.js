var elem = document.querySelector(".grid-container");
imagesLoaded(elem, () => {
    var msnry = new Masonry(elem, {
        // options
        itemSelector: ".container__fotografia",
        columnWidth: 236,
        gutter: 20,
        isFitWidth: true,
    });
});