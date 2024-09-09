import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('Anonymous');

  useEffect(() => {
    // Initialize chat data
    setMessages([
      { id: 1, text: 'Hello!', username: 'Siva' },
      { id: 2, text: 'Hi!', username: 'Abi' },
    ]);
  }, []);

  const handleSendMessage = () => {
    const newMessageObj = { id: messages.length + 1, text: newMessage, username };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <ul className="message-list">
        {messages.map((message) => (
          <li key={message.id}>
            <span>{message.username}</span>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;