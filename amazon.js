const sideMenu = document.querySelector(".side-menu");
const openBtn = document.querySelector(".nav-hamburger");
const closeBtn = document.querySelector(".close-menu-btn");
const removeMenuContainer = document.querySelector(".remove-menu");
// Optional: Select overlay if you added it
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
    sideMenu.classList.add("menu-open");
    removeMenuContainer.classList.add("show");
    if(overlay) overlay.classList.add("show");
    
    // Disable scrolling on the main body
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    sideMenu.classList.remove("menu-open");
    removeMenuContainer.classList.remove("show");
    if(overlay) overlay.classList.remove("show");
    
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
if(overlay) overlay.addEventListener("click", closeMenu); // Close when clicking outside

// ---------------slider----------------
const track = document.querySelector('.slide-track');
    const images = document.querySelectorAll('.slide-track img');
    let current = 0;
    let autoPlayInterval;

    function updateSlidePosition() {
      // Move the track to the left by (current index * 100%)
      track.style.transform = `translateX(-${current * 100}%)`;
    }

    function moveSlide(step) {
      current += step;

      // Logic to loop back to the start or end
      if (current >= images.length) {
        current = 0; // Go back to start
      } else if (current < 0) {
        current = images.length - 1; // Go to end
      }

      updateSlidePosition();
      resetTimer();
    }

    // Auto Play Logic
    function startTimer() {
      autoPlayInterval = setInterval(() => {
        moveSlide(1);
      }, 3000);
    }

    function resetTimer() {
      clearInterval(autoPlayInterval);
      startTimer();
    }

    startTimer();

    let currentPage = 1;
    const totalPages = 7; 

    function changePage(direction) {
 
        const allPages = document.querySelectorAll('.history-page');
        allPages[currentPage - 1].classList.remove('active');

  
        currentPage += direction;

        if (currentPage > totalPages) {
            currentPage = 1;
        }
     
        if (currentPage < 1) {
            currentPage = totalPages;
        }

    
        allPages[currentPage - 1].classList.add('active');

        const indicator = document.getElementById('page-indicator');
        indicator.innerText = `Page ${currentPage} of ${totalPages}`;
    }