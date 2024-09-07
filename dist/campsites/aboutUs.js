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
        const numStars = 50; 

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

//slider image
const imgUrlsArr = [
    "https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647565660/singularity-migrated-images/joshua-tree-national-park-guide-sunset-via-magazine-shutterstock_1077314585-2x1.jpg.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_02.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_03.jpg"
  ];
  
  const articleContainer = document.getElementById("article-container");
  
  articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;
  
  let imgIndex = 0;
  
  function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
      imgIndex--;
    } else {
      imgIndex = imgUrlsArr.length - 1;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }
  
  function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }