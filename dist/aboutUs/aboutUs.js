document.addEventListener('DOMContentLoaded', () => {
    const starryCards = ['starry-card',]; // IDs of the cards with stars
    
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

// Burger Js 
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})


