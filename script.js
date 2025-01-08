// Function to animate counters
function animateCount(countElement, targetNumber, duration = 1400) {
  let start = 0;
  const increment = targetNumber / (duration / 10);

  const counter = setInterval(() => {
    start += increment;
    countElement.textContent = Math.round(start);

    if (start >= targetNumber) {
      clearInterval(counter);
      countElement.textContent = targetNumber;
    }
  }, 10);
}

// Counter elements and their target numbers
const counters = [
  { element: document.getElementById('counter1'), target: 90 },
  { element: document.getElementById('counter2'), target: 30 },
  { element: document.getElementById('counter3'), target: 50 },
  { element: document.getElementById('counter4'), target: 100 },
  { element: document.getElementById('counter5'), target: 10 },
];

let animationTriggered = false;

// Event listener to trigger counter animation on scroll
window.addEventListener('scroll', () => {
  const numbersSection = document.querySelector('.numbers-grid');
  if (!numbersSection) return; // Exit if the section doesn't exist

  const sectionTop = numbersSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (!animationTriggered && sectionTop <= windowHeight - 100) { // Adjusted threshold
    animationTriggered = true;
    counters.forEach(counter => {
      if (counter.element) {
        animateCount(counter.element, counter.target);
      }
    });
  }
});

// Infinite banner animation with responsive speed and hover-to-pause
const bannerContainer = document.querySelector('.banner-container');
const banner = document.querySelector('.banner');

if (bannerContainer && banner) {
  const bannerContent = banner.innerHTML;

  // Duplicate content multiple times for seamless scrolling
  banner.innerHTML = bannerContent + bannerContent + bannerContent;

  let scrollPosition = 0;
  let isHovered = false;

  // Adjust scroll speed dynamically based on viewport width
  const scrollSpeed = window.innerWidth < 768 ? 1.2 : 1.7; // Adjust for smaller screens

  function animateBanner() {
    if (!isHovered) {
      scrollPosition += scrollSpeed; // Adjust scroll speed based on viewport width
      bannerContainer.scrollLeft = scrollPosition;

      // Reset scroll position when one full set of content has scrolled
      if (scrollPosition >= banner.scrollWidth / 3) {
        // Reset only after the full length of the banner content has scrolled
        scrollPosition = 0;
      }
    }

    requestAnimationFrame(animateBanner);
  }

  // Pause scrolling when hovering over the banner
  bannerContainer.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  // Resume scrolling when leaving the banner
  bannerContainer.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  animateBanner();
}