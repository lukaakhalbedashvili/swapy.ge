"use server";

import nodemailer from "nodemailer";

export const sendEmailToMe = async (text: string) => {
  let transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "mock123123@outlook.com",
      pass: process.env.OUTLOOK_PASS,
    },
  });

  let mailOptions = {
    from: "mock123123@outlook.com",
    to: "lukaakhalbedashvili@gmail.com",
    subject: text,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
  });
};

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export const sendMessage = async (text: string) => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message: " + data.description);
    }
  } catch (error) {
    console.error("Error sending message: " + error);
  }
};
