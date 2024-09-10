function animateCount(countElement, targetNumber, duration = 700) {
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

// Array of counter objects

const counters = [
  { element: document.getElementById('counter1'), target: 90 },
  { element: document.getElementById('counter2'), target: 45 },
  { element: document.getElementById('counter3'), target: 50 },
  { element: document.getElementById('counter4'), target: 100 },
  { element: document.getElementById('counter5'), target: 10 },
  // ... more counters
];

let animationTriggered = false;

window.addEventListener('scroll', () => {
  const counterSection = document.getElementById('experience');
  const sectionTop = counterSection.offsetTop;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (!animationTriggered && scrollPosition >= sectionTop - windowHeight) {
    animationTriggered = true;
    counters.forEach(counter => {
      animateCount(counter.element, counter.target);
    });
  }
});

const bannerContainer = document.querySelector('.banner-container');
const bannerWidth = bannerContainer.scrollWidth;
const containerWidth = bannerContainer.clientWidth;
let scrollPosition = 0;

function animateBanner() {
  scrollPosition += 1.5; // Adjust scroll speed as needed
  bannerContainer.scrollLeft = scrollPosition;

  if (scrollPosition >= bannerWidth - containerWidth) {
    scrollPosition = 0;
  }

  requestAnimationFrame(animateBanner);
}

animateBanner();

// const bubbleContainer = document.querySelector('.bubble-container');

// function createBubble() {
//   const bubble = document.createElement('div');
//   bubble.classList.add('bubble');

//   // Randomize size, position, and color
//   const size = Math.random() * 40 + 10;
//   bubble.style.width = `${size}px`;
//   bubble.style.height = `${size}px`;

//   const x = Math.random() * 100;
//   const y = Math.random() * 100;
//   bubble.style.left = `${x}%`;
//   bubble.style.top = `${y}%`;

//   const colors = ['#F0E68C', '#87CEEB', '#FFB6C1'];
//   bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

//   bubbleContainer.appendChild(bubble);

//   setTimeout(() => {
//     bubble.remove();
//   }, 4000 + Math.random() * 2000); // Random lifespan
// }

// setInterval(createBubble, 500); // Create bubbles every 500ms