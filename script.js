function hideAllScreens() {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });
}


function openSurprise() {

    hideAllScreens();

    document
        .getElementById("birthday")
        .classList.add("active");

    createConfetti();
}


function showLetter() {

    hideAllScreens();

    document
        .getElementById("letter")
        .classList.add("active");
}


function showMemories() {

    hideAllScreens();

    document
        .getElementById("memories")
        .classList.add("active");
}


function finalWish() {

    hideAllScreens();

    document
        .getElementById("final")
        .classList.add("active");

    createConfetti();
}


/* Confetti */

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 2;

        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)"
                }
            ],

            {
                duration: duration * 1000,

                easing: "linear"
            }
        );

        setTimeout(function() {

            confetti.remove();

        }, duration * 1000);
    }
}