import React, { useEffect, useState } from "react";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:5000/api/messages", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("❌ Error fetching messages:", err));
  }, [token]);

  if (!token) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>❌ Unauthorized. Please log in.</p>;
  }

  return (
    <div className="admin-messages container">
      <h2>📩 Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><small>Sent on: {new Date(msg.date).toLocaleString()}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminMessages;
