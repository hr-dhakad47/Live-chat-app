import React, { useRef, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ChatPage() {
  const [msg, setMsg] = useState([]);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [refresh, setRefresh] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://chat-app-backend-lac.vercel.app/message/getMessage")
      .then((res) => {
        console.log(res.data);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  useEffect(() => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfoFromStorage = JSON.parse(userInfoString);
      setUserInfo(userInfoFromStorage);
    }
  }, [refresh]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msg]);

  const handleSendMessage = async () => {
    try {
      await axios.post("https://chat-app-backend-lac.vercel.app/message/addMessage", { userName : userInfo.name, userEmail : userInfo.email, message});
      setRefresh(!refresh);
      setMessage("");
      console.log("Message added successfully", message);
    } catch (error) {
      console.error('Message sending failed:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="container-fluid fixed-top z-1">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="mx-auto col">
              <img
                src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
            </div>
            <div className="mx-auto col text-center fs-3">
              <b>Live Chat</b>
            </div>
            <div className="mx-auto col text-end fs-3">&hearts;</div>
          </div>
        </nav>
      </div>
      
      <div className="container-fluid mt-5 mb-5" style={{ overflowY: "auto", maxHeight: "90vh" }}>
        {msg.map((msgs, index) => (
          <div key={index} className="border mb-2">
            <div className="d-flex border-bottom">
              <div className="ps-2 text-primary text-uppercase flex-grow-1">
                {msgs.userName}
              </div>
              <div className="pe-2 text-danger text-opacity-75">
                {msgs.userEmail}
              </div>
            </div>
            <div className="ps-2">MESSAGE: {msgs.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-group fixed-bottom mb-1 z-0">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          placeholder="message"
          onKeyPress={handleKeyPress} // Attach keypress event listener
        />
        <button onClick={handleSendMessage} className="btn btn-primary" type="submit">
          Send
        </button>
      </div>
    </>
  );
}

export default ChatPage;
