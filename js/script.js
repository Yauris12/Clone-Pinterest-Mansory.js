var elem = document.querySelector(".grid-container");
var msnry = new Masonry(elem, {
    // options
    itemSelector: ".container__fotografia",
    columnWidth: 236,
    gutter: 20,
    isFitWidth: true,
});