document.addEventListener("DOMContentLoaded", () => {
    // Animate chart sliding in from right
    gsap.to(".chart", {
        x: "0%",
        duration: 2,
        ease: "power3.out"
    });

    // Mental model cards float in on scroll
    gsap.utils.toArray(".card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)"
        });
    });
});
