function animateCount(countElement, targetNumber, duration = 600) {
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
