
let box = document.getElementById('emoji');
let images = box.getElementsByTagName('img');

Array.prototype.slice.call(images).forEach(image => {
    image.onmousedown = function (e) {

        let coords = getCoords(image);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;

        image.style.zIndex = 1000;

        document.onmousemove = function (e) {
            moveAt(e, image, shiftX, shiftY);
        };

    };

    image.onmouseup = function () {
        document.onmousemove = null;
        image.style.zIndex = 1;
    };

    image.ondragstart = function () {
        return false;
    };
});

function moveAt(e, image, shiftX, shiftY) {
     let parrentCords = getCoords(image.parentElement);
    image.style.left = e.pageX - parrentCords.left - shiftX + 'px';
    image.style.top = e.pageY - parrentCords.top - shiftY + 'px';
}



function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}


