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
  { element: document.getElementById('counter2'), target: 45 },
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

// Banner animation
const bannerContainer = document.querySelector('.banner-container');
if (bannerContainer) {
  let scrollPosition = 0;

  function animateBanner() {
    scrollPosition += 1.5; // Adjust scroll speed as needed
    bannerContainer.scrollLeft = scrollPosition;

    if (scrollPosition >= bannerContainer.scrollWidth - bannerContainer.clientWidth) {
      scrollPosition = 0;
    }

    requestAnimationFrame(animateBanner);
  }

  animateBanner();
}
