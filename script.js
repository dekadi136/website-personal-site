class CustomBubbleBackground {
  constructor(containerId, particleId) {
    this.bubbleContainer = document.getElementById(containerId);
    this.particleContainer = document.getElementById(particleId);

    if (!this.bubbleContainer || !this.particleContainer) return;

    this.colors = [
      "bubble-blue",
      "bubble-purple",
      "bubble-pink",
      "bubble-indigo",
      "bubble-cyan",
      "bubble-emerald",
      "bubble-gray",
    ];
    this.sizes = [
      "bubble-tiny",
      "bubble-small",
      "bubble-medium",
      "bubble-large",
      "bubble-xl",
      "bubble-xxl",
    ];
    this.opacities = ["opacity-subtle", "opacity-light", "opacity-medium"];
    this.speeds = [
      "animate-ultra-slow",
      "animate-slow",
      "animate-medium",
      "animate-fast",
    ];

    this.init();
  }

  init() {
    this.createInitialBubbles();
    this.startBubbleGeneration();
    this.startParticleGeneration();
  }

  createInitialBubbles() {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        this.createBubble();
      }, i * 500);
    }
  }

  startBubbleGeneration() {
    setInterval(() => {
      if (this.bubbleContainer.children.length < 8) {
        this.createBubble();
      }
    }, 1500);
  }

  startParticleGeneration() {
    setInterval(() => {
      if (this.particleContainer.children.length < 5) {
        this.createFloatingParticle();
      }
    }, 3000);
  }

  createBubble() {
    const bubble = document.createElement("div");

    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const opacity =
      this.opacities[Math.floor(Math.random() * this.opacities.length)];
    const speed = this.speeds[Math.floor(Math.random() * this.speeds.length)];

    bubble.className = `bubble ${color} ${size} ${opacity} ${speed}`;

    const leftPos = Math.random() * 95;
    bubble.style.left = leftPos + "%";
    bubble.style.animationDelay = Math.random() * 8 + "s";

    this.bubbleContainer.appendChild(bubble);

    const duration = this.getAnimationDuration(speed);
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
    }, duration + 2000);
  }

  createFloatingParticle() {
    const particle = document.createElement("div");
    particle.className = "floating-particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 5 + "s";

    const colors = [
      "rgba(99, 102, 241, 0.6)",
      "rgba(236, 72, 153, 0.5)",
      "rgba(16, 185, 129, 0.5)",
      "rgba(147, 51, 234, 0.5)",
    ];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    this.particleContainer.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 22000);
  }

  getAnimationDuration(speed) {
    switch (speed) {
      case "animate-ultra-slow":
        return 35000;
      case "animate-slow":
        return 25000;
      case "animate-medium":
        return 18000;
      case "animate-fast":
        return 12000;
      default:
        return 18000;
    }
  }
}

// Inisialisasi bubble animation
document.addEventListener("DOMContentLoaded", () => {
  new CustomBubbleBackground("bubbleContainer", "particleContainer");
});
