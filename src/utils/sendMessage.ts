const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export const sendMessage = async () => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: "message",
      }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message: " + data.description);
    }
  } catch (error) {
    alert("Error sending message: " + error);
  }
};
