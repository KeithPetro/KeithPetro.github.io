anime({
    targets: 'div.box',
    translateX: [
        { value: 100, duration: 500 }
    ],
});

document.getElementsByClassName("box").onmouseover =
    function randomizedMovement() {
        anime({
            targets: 'div.box',
            translateX: function() {
                return anime.random(0, 5);
            },
            translateY: function() {
                return anime.random(0, 5);
            },
            easing: 'easeInOutQuad',
            duration: 100,
        });
    }

