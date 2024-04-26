// Initial setup
gsap.set(".circular-Marquee-container", { scale: 0, opacity: 1 });
gsap.set(".background", { width: "100%", height: "100%", backgroundColor: "black", position: "absolute", top: 0 });
gsap.set(".background2", { width: "100%", height: "100%", backgroundColor: "#54f446", position: "absolute", top: 0 });

// Animation timeline
let t1 = gsap.timeline();

t1.to(".circular-Marquee-container", {
    scale: 1,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
})
    .to(".circular-Marquee-container", {
        rotation: 360,
        duration: 5,
        ease: "power1.inOut",
        repeat: -1
    }, "-=0.5") // Start rotation animation 0.5s before the previous animation ends
    .to(".circular-Marquee-container", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        onComplete: function () {
            // Hide the element after animation completion
            gsap.set(".circular-Marquee-container", { display: "none" });
            // Move background div upwards
            gsap.to(".background", { duration: 1, top: "-100%", ease: "power1.inOut" });
            // Move background2 div upwards
            gsap.to(".background2", { duration: 1, top: "-100%", ease: "power1.inOut", delay: 0.1 });
        }
    });


// !  Main Page Effect

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        pin: true,
        markers: true,
    }
})

tl.to(".svg1", {
    maskSize: "200%"
}, 'a')

tl.to(".img1", {
    backgroundSize: "100%"
}, 'a')

tl.to(".svg2", {
    maskSize: "200%"
}, 'b')

tl.to(".img2", {
    backgroundSize: "100%"
}, 'b')


// ! Social Media Footer Timer
function SocialMedia() {
    const currentTimeElement = document.getElementById('current-time');
    const currentYearElement = document.getElementById('current-year');

    function updateClock() {
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const formattedTime = currentTime.toLocaleTimeString();

        currentTimeElement.textContent = formattedTime;
        currentYearElement.textContent = currentYear;
    }

    // Initial call to update time and year
    updateClock();

    // Update time every second
    setInterval(updateClock, 1000);
}

// Call the function to initialize the clock
SocialMedia();

