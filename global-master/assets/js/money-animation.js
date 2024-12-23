class AIMoneyAnimation {
    constructor() {
      this.container = this.createContainer();
      this.init();
    }
  
    createContainer() {
      const container = document.createElement('div');
      container.className = 'money-container';
      document.body.appendChild(container);
      return container;
    }
  
    createMoney() {
      const money = document.createElement('div');
      money.className = 'money';
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      money.style.left = `${startX}px`;
      money.style.bottom = '-50px';
      
      // Random delay
      money.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add AI particles
      this.addAIParticles(money);
      
      this.container.appendChild(money);
      
      // Remove element after animation
      money.addEventListener('animationend', () => {
        money.remove();
      });
    }
  
    addAIParticles(money) {
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'ai-particle';
        particle.style.left = `${Math.random() * 40}px`;
        particle.style.top = `${Math.random() * 20}px`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        money.appendChild(particle);
      }
    }
  
    init() {
      // Create new money elements periodically
      setInterval(() => {
        this.createMoney();
      }, 2000);
    }
  }
  
  // Initialize animation when the page loads
  window.addEventListener('load', () => {
    new AIMoneyAnimation();
  });