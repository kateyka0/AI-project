
import React, { useEffect, useRef } from "react";
import css from './ChatSection.module.css';

function ChatWindow({ messages }) {
  const endOfMessagesRef = useRef(null);

  // Використовуємо useEffect для автопрокрутки вниз при додаванні нового повідомлення
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={css.chatWindow}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${css.message} ${message.sender === "user" ? css.user : css.ai}`}
        >
          {message.text}
        </div>
      ))}
      {/* Елемент, який допомагає прокрутити вниз */}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default ChatWindow;
