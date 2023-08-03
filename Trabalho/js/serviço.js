document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("messageInput");
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const chatMessages = document.getElementById("chatMessages");

    sendMessageBtn.addEventListener("click", () => {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            appendUserMessage(messageText);
            simulateBotReply(messageText);
            messageInput.value = "";
        }
    });

    const appendUserMessage = (message) => {
        const userMessage = createMessageElement(message, "user");
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const appendBotMessage = (message) => {
        const botMessage = createMessageElement(message, "bot");
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const createMessageElement = (message, sender) => {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.className = `${sender}-message`;
        return messageDiv;
    };

    const simulateBotReply = (userMessage) => {
        // Replace this function with actual logic to generate bot replies based on user input.
        const botReply = `Bot: I received "${userMessage}".`;
        setTimeout(() => {
            appendBotMessage(botReply);
        }, 1000);
    };

    // Optional: Implement a welcome message from the bot
    setTimeout(() => {
        const welcomeMessage = "Bot: Olá! Como posso ajudar?";
        appendBotMessage(welcomeMessage);
    }, 500);
});
