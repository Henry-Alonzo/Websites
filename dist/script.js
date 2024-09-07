//stars
document.addEventListener('DOMContentLoaded', () => {
    const starryCards = ['starry-card', 'starry-card-6']; // IDs of the cards with stars
    
    starryCards.forEach(cardId => {
        const canvas = document.createElement('canvas');
        canvas.id = 'star-canvas';
        const card = document.getElementById(cardId);
        card.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = card.clientWidth;
            canvas.height = card.clientHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const stars = [];
        const numStars = 50; // Number of stars

        function createStar() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 1.5 + 1,
                speedY: Math.random() * 1.5 + 1
            };
        }

        function drawStars() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'white';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function updateStars() {
            stars.forEach(star => {
                star.x += star.speedX;
                star.y += star.speedY;

                if (star.x > canvas.width || star.y > canvas.height) {
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                    star.size = Math.random() * 2 + 1;
                    star.speedX = Math.random();
                    star.speedY = Math.random();
                }
            });
        }

        function animate() {
            updateStars();
            drawStars();
            requestAnimationFrame(animate);
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(createStar());
        }

        animate();
    });
});

//page transition animation
document.addEventListener("DOMContentLoaded", function () {
    // Select all the card links
    const links = document.querySelectorAll(".card");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            // Prevent the default action of the link
            e.preventDefault();

            // Get the target URL of the clicked link
            const href = this.getAttribute("href");

            // Get the overlay and main content elements
            const overlay = document.getElementById("transition-overlay");
            const content = document.getElementById("content");

            // Hide the main content
            content.style.visibility = "hidden"; // Hide content but keep its space
            content.style.opacity = "0"; // Fade out content

            // Slide the overlay across the screen
            overlay.style.transition = "left 0.3s ease, opacity 0.1s ease"; // Smooth slide-in and fade transition
            overlay.style.left = "0"; // Start sliding in
            overlay.style.opacity = "1"; // Ensure it's fully visible when sliding in

            // After a short delay, continue the slide off to the right
            setTimeout(() => {
                overlay.style.transition = "left 0.3s ease, opacity 0.5s ease"; // Smooth slide-out and fade transition
                overlay.style.left = "100%"; // Slide out completely to the right
                overlay.style.opacity = "0"; // Fade out to reveal the page beneath

                // Navigate to the target page after the overlay slides out
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match this with the second transition duration
            }, 500); // Match this with the first transition duration
        });
    });
});



