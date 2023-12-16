import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ChatPage() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getMessage")
      .then((res) => {
        console.log(res.data);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="#">
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
    </>
  );
}
export default ChatPage;
