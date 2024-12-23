class QuantumProChatbot {
    constructor() {
      this.responses = {
        'seo': {
          keywords: ['seo', 'search engine', 'ranking', 'visibility'],
          response: "Our SEO services help improve your website's visibility and rankings. Would you like to know about our SEO packages or get a free website audit?"
        },
        'web_design': {
          keywords: ['web', 'design', 'website', 'development'],
          response: "We create stunning, responsive websites tailored to your business needs. Would you like to see our portfolio or discuss your project requirements?"
        },
        'product_sourcing': {
          keywords: ['product', 'sourcing', 'procurement', 'supply'],
          response: "Our product sourcing service helps you find reliable suppliers and quality products. Would you like to discuss your sourcing needs?"
        },
        'default': "Welcome to Quantum Pro Ltd! How can we help you today? We offer SEO, Web Design, and Product Sourcing services."
      };
      
      this.createChatbotUI();
      this.initializeEventListeners();
    }
  
    createChatbotUI() {
      const chatbotHTML = `
        <div id="quantum-chatbot" class="chatbot-container">
          <div class="chatbot-header">
            <img src="assets/img/logo.png" alt="Quantum Pro Ltd" class="chatbot-logo">
            <span>Quantum Pro Support</span>
            <button id="close-chatbot">×</button>
          </div>
          <div class="chatbot-messages"></div>
          <div class="chatbot-input">
            <input type="text" placeholder="Type your message...">
            <button type="submit">Send</button>
          </div>
        </div>
        <button id="chatbot-toggle" class="chatbot-toggle">
          <span>Need Help?</span>
        </button>
      `;
  
      document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
  
    initializeEventListeners() {
      const toggle = document.getElementById('chatbot-toggle');
      const close = document.getElementById('close-chatbot');
      const container = document.getElementById('quantum-chatbot');
      const input = container.querySelector('input');
      const submit = container.querySelector('button[type="submit"]');
  
      toggle.addEventListener('click', () => {
        container.classList.add('active');
        this.addMessage(this.responses.default, 'bot');
      });
  
      close.addEventListener('click', () => {
        container.classList.remove('active');
      });
  
      submit.addEventListener('click', () => this.handleUserInput(input));
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleUserInput(input);
      });
    }
  
    handleUserInput(input) {
      const message = input.value.trim();
      if (!message) return;
  
      this.addMessage(message, 'user');
      input.value = '';
  
      // Process the message and get response
      const response = this.processMessage(message);
      setTimeout(() => this.addMessage(response, 'bot'), 500);
    }
  
    processMessage(message) {
      message = message.toLowerCase();
      
      for (const [key, service] of Object.entries(this.responses)) {
        if (key === 'default') continue;
        
        if (service.keywords.some(keyword => message.includes(keyword))) {
          return service.response;
        }
      }
      
      return "I understand you're interested in our services. Could you please specify if you're looking for SEO, Web Design, or Product Sourcing solutions?";
    }
  
    addMessage(message, sender) {
      const messagesContainer = document.querySelector('.chatbot-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }