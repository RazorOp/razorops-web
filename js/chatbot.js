// chatbot.js
(function() {
  // CSS for the chat window
  const styles = `
  .chat-container {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      font-family: Arial, sans-serif;
  }
  .chat-header {
      background-color: #007bff;
      color: white;
      padding: 10px;
      text-align: center;
  }
  .chat-window {
      border: 1px solid #007bff;
      border-top: none;
      display: flex;
      flex-direction: column;
  }
  .chat-window.hidden {
      display: none;
  }
  #chat-messages {
      height: 200px;
      overflow-y: scroll;
      padding: 10px;
      background-color: #f1f1f1;
  }
  #chat-input {
      padding: 10px;
      border: 1px solid #ccc;
      width: calc(100% - 22px);
  }
  button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
  }
  button:hover {
      background-color: #0056b3;
  }
  `;

  // Create a style element and append the styles
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // HTML for the chat window
  const chatHTML = `
  <div class="chat-container">
      <div class="chat-header">
          <h3>Chat</h3>
          <button id="chat-toggle" onclick="toggleChat()">Open Chat</button>
      </div>
      <div id="chat-window" class="chat-window hidden">
          <div id="chat-messages" class="chat-messages"></div>
          <input id="chat-input" type="text" placeholder="Type a message...">
          <button onclick="sendMessage()">Send</button>
      </div>
  </div>
  `;

  // Append the chat HTML to the body
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // Function to toggle chat window
  window.toggleChat = function() {
      const chatWindow = document.getElementById('chat-window');
      if (chatWindow.classList.contains('hidden')) {
          chatWindow.classList.remove('hidden');
          document.getElementById('chat-toggle').textContent = 'Close Chat';
          fetchChatMessages();
      } else {
          chatWindow.classList.add('hidden');
          document.getElementById('chat-toggle').textContent = 'Open Chat';
      }
  };

  // Function to fetch chat messages from server
  async function fetchChatMessages() {
      try {
          const response = await fetch('https://your-api-endpoint.com/getMessages');
          const messages = await response.json();
          const chatMessages = document.getElementById('chat-messages');
          chatMessages.innerHTML = ''; // Clear existing messages
          messages.forEach(message => {
              const messageElement = document.createElement('div');
              messageElement.textContent = message.text;
              chatMessages.appendChild(messageElement);
          });
      } catch (error) {
          console.error('Error fetching chat messages:', error);
      }
  }

  // Function to send a message
  window.sendMessage = async function() {
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (message) {
          const chatMessages = document.getElementById('chat-messages');
          const messageElement = document.createElement('div');
          messageElement.textContent = message;
          chatMessages.appendChild(messageElement);
          input.value = '';
          chatMessages.scrollTop = chatMessages.scrollHeight;

          try {
              await fetch('https://your-api-endpoint.com/sendMessage', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ text: message })
              });
          } catch (error) {
              console.error('Error sending message:', error);
          }
      }
  };
})();
