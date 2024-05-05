import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ChatPage() {
  const [msg, setMsg] = useState([]);
  const [message, setmessage] = useState('');
  const [userInfo, setUserInfo] = useState({});
  

  useEffect(() => {
    axios
      .get("http://localhost:4000/message/getMessage")
      .then((res) => {
        console.log(res.data);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfoFromStorage = JSON.parse(userInfoString);
      setUserInfo(userInfoFromStorage);
    }
  }, []);


  const handleSendMessage = async () => {
    try {
      await axios.post("http://localhost:4000/message/addMessage", { userName : userInfo.name, userEmail : userInfo.email, message});
      console.log("massage added succefullly", message)
    } catch (error) {
      console.error('Message sending failed:', error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="/">
              <div className="mx-auto col">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
              </div>
            </a>
            <div className="mx-auto col text-center fs-3">
              <b>Live Chat</b>
            </div>
            <div className="mx-auto col text-end fs-3">&hearts;</div>
          </div>
        </nav>
      </div>
      {msg.map((msgs, index) => {
        return (
          <>
            <div className="container-fluid m-2">
              <div className="border">
                <div className="d-flex border-bottom">
                  <div className="ps-2 text-primary text-uppercase flex-grow-1">
                    {msgs.userName}
                  </div>
                  <div className="pe-2 text-danger text-opacity-75">
                    {msgs.userEmail}
                  </div>
                </div>
                <div className="ps-2 tex">MESSAGE: {msgs.message}</div>
              </div>
            </div>
          </>
        );
      })}


      <div className="input-group fixed-bottom mb-3">
          <input type="text" value={message} onChange={(e) => setmessage(e.target.value)} className="form-control floatingInput"  placeholder="message"/>
                <button onClick={handleSendMessage} className="btn btn-primary" type="submit">
          Send
        </button>
      </div>
    </>
  );
}
export default ChatPage;