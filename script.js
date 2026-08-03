/*=========================================
Happy Girlfriend Day
Version 2 - Fixed
=========================================*/

"use strict";


/*=========================================
SELECTORS
=========================================*/

const loader = document.getElementById("loader");
const intro = document.querySelector(".intro");
const startBtn = document.getElementById("startBtn");
const screenTwo = document.getElementById("screenTwo");

const giftBox = document.getElementById("giftBox");
const giftLid = document.querySelector(".gift-lid");
const giftGlow = document.querySelector(".gift-glow");
const giftText = document.querySelector(".gift-text");


/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.remove();

            }, 500);

        }


        /*=========================================
        INTRO ANIMATION
        =========================================*/

        if (typeof gsap !== "undefined") {

            gsap.from(".laptop", {

                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"

            });


            gsap.from(".boot-logo", {

                scale: 0,
                opacity: 0,
                duration: .7,
                delay: .4,
                ease: "back.out(1.7)"

            });


            gsap.from(".title", {

                y: 30,
                opacity: 0,
                duration: .8,
                delay: .6,
                ease: "power3.out"

            });


            gsap.from(".subtitle", {

                y: 20,
                opacity: 0,
                duration: .7,
                delay: .9,
                ease: "power3.out"

            });


            gsap.from("#startBtn", {

                y: 20,
                scale: .85,
                opacity: 0,
                duration: .7,
                delay: 1.2,
                ease: "back.out(1.7)"

            });

        }

    }, 1500);

});


/*=========================================
OPEN SURPRISE
=========================================*/

if (startBtn) {

    startBtn.addEventListener("click", () => {

        /* Button click animation */

        if (typeof gsap !== "undefined") {

            gsap.to(startBtn, {

                scale: .92,
                duration: .12,
                yoyo: true,
                repeat: 1

            });

        }


        /*=========================================
        SHOW GIFT SCREEN
        =========================================*/

        setTimeout(() => {

            if (screenTwo) {

                screenTwo.classList.add("active");

            }

        }, 250);

    });

}


/*=========================================
GIFT BOX
=========================================*/

let giftOpened = false;


function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    
    /*=========================================
START MUSIC AFTER GIFT CLICK
=========================================*/

if (backgroundMusic) {

    backgroundMusic
        .play()
        .then(() => {

            if (musicToggle) {

                musicToggle.textContent = "⏸️";

                musicToggle.setAttribute(
                    "aria-label",
                    "Pause music"
                );

            }

            if (musicStatus) {

                musicStatus.textContent =
                    "Now playing for you ❤️";

            }

            if (musicPlayer) {

                musicPlayer.classList.add("playing");

            }

        })
        .catch((error) => {

            console.warn(
                "Music could not start:",
                error
            );

        });

}


    if (giftBox) {

        giftBox.classList.add("opened");

    }


    /*=========================================
    CHECK GSAP
    =========================================*/

    if (typeof gsap === "undefined") {

        console.warn("GSAP is not loaded.");

        return;

    }


    /*=========================================
    GIFT ANIMATION
    =========================================*/

    const giftTimeline = gsap.timeline();


    /* Open lid */

    if (giftLid) {

        giftTimeline.to(giftLid, {

            rotationX: -125,

            y: -25,

            duration: .8,

            ease: "power3.inOut"

        });

    }


    /* Glow */

    if (giftGlow) {

        giftTimeline.to(giftGlow, {

            opacity: 1,

            scale: 1.4,

            duration: .7,

            ease: "power2.out"

        }, "-=.4");

    }


    /* Box bounce */

    if (giftBox) {

        giftTimeline.to(giftBox, {

            y: -12,

            duration: .18,

            repeat: 3,

            yoyo: true,

            ease: "power1.inOut"

        });

    }


    /* Change text */

    giftTimeline.call(() => {

        if (giftText) {

            giftText.textContent =
                "A little surprise just for you ❤️";

        }

    });


/*=========================================
CONFETTI
=========================================*/

setTimeout(() => {

    if (typeof window.confetti === "function") {

        window.confetti({
            particleCount: 180,
            spread: 120,
            startVelocity: 45,
            gravity: 0.9,
            scalar: 1.2,
            ticks: 250,

            origin: {
                x: 0.5,
                y: 0.55
            },

            zIndex: 999999,

            disableForReducedMotion: false,

            useWorker: false
        });

        console.log("🎉 CONFETTI FIRED");

    } else {

        console.error("❌ CONFETTI FUNCTION NOT FOUND");

    }

}, 500);
/*=========================================
FLOATING HEARTS
=========================================*/

const heartContainer =
    document.querySelector(".gift-scene");

if (heartContainer) {

    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent = "❤️";

        heart.style.left =
            `${20 + Math.random() * 60}%`;

        heart.style.animationDelay =
            `${Math.random() * .8}s`;

        heart.style.fontSize =
            `${14 + Math.random() * 14}px`;

        heartContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 3500);

    }

}
    
 /*=========================================
SHOW LOVE LETTER
=========================================*/

giftTimeline.to("#loveLetter", {

    autoAlpha: 1,

    y: 0,

    scale: 1,

    duration: 1.2,

    ease: "back.out(1.5)"

}, "+=0.2");


/*=========================================
LETTER PAPER
=========================================*/

giftTimeline.from(".letter-paper", {

    rotationY: -12,

    duration: .8,

    ease: "power3.out"

}, "-=.8");


/*=========================================
LETTER HEART
=========================================*/

giftTimeline.from(".letter-heart", {

    scale: 0,

    rotation: -20,

    duration: .6,

    ease: "back.out(2)"

});


/*=========================================
LETTER HEADING
=========================================*/

giftTimeline.from(".letter-paper h2", {

    y: 20,

    opacity: 0,

    duration: .5

});


/*=========================================
LETTER MESSAGE
=========================================*/

giftTimeline.from(".letter-message", {

    y: 20,

    opacity: 0,

    duration: .7

});


/*=========================================
LETTER SIGNATURE
=========================================*/

giftTimeline.from(".letter-sign", {

    y: 15,

    opacity: 0,

    duration: .5

});

}


/*=========================================
GIFT CLICK
=========================================*/

if (giftBox) {

    giftBox.addEventListener("click", openGift);


    /* Keyboard support */

    giftBox.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openGift();

        }

    });

}


/*=========================================
ESCAPE
=========================================*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (screenTwo) {

            screenTwo.classList.remove("active");

        }

    }

});


/*=========================================
READY
=========================================*/


/*=========================================
OUR LITTLE MOMENTS ANIMATION
=========================================*/

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".moments-small", {

        scrollTrigger: {
            trigger: ".moments-section",
            start: "top 80%",
            once: true
        },

        y: 25,
        opacity: 0,
        duration: .7,
        ease: "power3.out"

    });


    gsap.from(".moments-title", {

        scrollTrigger: {
            trigger: ".moments-section",
            start: "top 75%",
            once: true
        },

        y: 35,
        opacity: 0,
        duration: .9,
        delay: .15,
        ease: "power3.out"

    });


    gsap.from(".moments-intro", {

        scrollTrigger: {
            trigger: ".moments-section",
            start: "top 70%",
            once: true
        },

        y: 20,
        opacity: 0,
        duration: .7,
        delay: .25,
        ease: "power3.out"

    });


    gsap.from(".moment-card", {

        scrollTrigger: {
            trigger: ".moments-grid",
            start: "top 80%",
            once: true
        },

        y: 60,
        opacity: 0,
        scale: .92,

        duration: .8,

        stagger: .18,

        ease: "back.out(1.4)"

    });

}
/*=========================================
PHOTO LIGHTBOX
=========================================*/

const photoLightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const momentImages = document.querySelectorAll(".moment-photo img");


/*=========================================
OPEN PHOTO
=========================================*/

momentImages.forEach((image) => {

    image.addEventListener("click", () => {

        if (!photoLightbox || !lightboxImage) return;

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        photoLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/*=========================================
CLOSE PHOTO
=========================================*/

function closeLightbox() {

    if (!photoLightbox) return;

    photoLightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* Close button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/*=========================================
CLICK OUTSIDE IMAGE
=========================================*/

if (photoLightbox) {

    photoLightbox.addEventListener("click", (event) => {

        if (event.target === photoLightbox) {

            closeLightbox();

        }

    });

}


/*=========================================
ESC KEY
=========================================*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});
/*=========================================
3D MOMENT CARD TILT
=========================================*/

const momentCards =
    document.querySelectorAll(".moment-card");


momentCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        const rotateX =
            ((centerY - y) / centerY) * 8;


        card.style.transform =
            `perspective(900px)
             translateY(-12px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "";

    });

});
/*=========================================
BACKGROUND MUSIC
=========================================*/

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

const musicPlayer =
    document.getElementById("musicPlayer");

const musicStatus =
    document.getElementById("musicStatus");


/*=========================================
PLAY / PAUSE
=========================================*/

if (backgroundMusic && musicToggle) {

    musicToggle.addEventListener("click", async () => {

        try {

            if (backgroundMusic.paused) {

                await backgroundMusic.play();

                musicToggle.textContent = "⏸️";

                musicToggle.setAttribute(
                    "aria-label",
                    "Pause music"
                );

                if (musicStatus) {

                    musicStatus.textContent =
                        "Now playing for you ❤️";

                }

                if (musicPlayer) {

                    musicPlayer.classList.add("playing");

                }

            } else {

                backgroundMusic.pause();

                musicToggle.textContent = "🎵";

                musicToggle.setAttribute(
                    "aria-label",
                    "Play music"
                );

                if (musicStatus) {

                    musicStatus.textContent =
                        "Play our little song ❤️";

                }

                if (musicPlayer) {

                    musicPlayer.classList.remove("playing");

                }

            }

        } catch (error) {

            console.warn(
                "Music could not be played:",
                error
            );

        }

    });


    /*=========================================
    MUSIC ENDED
    =========================================*/

    backgroundMusic.addEventListener(
        "ended",
        () => {

            musicToggle.textContent = "🎵";

            if (musicStatus) {

                musicStatus.textContent =
                    "Play our little song ❤️";

            }

            if (musicPlayer) {

                musicPlayer.classList.remove("playing");

            }

        }
    );

}

