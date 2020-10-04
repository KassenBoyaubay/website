import React, { useState, useEffect } from "react";
import "./FacebookMessengerApp.scss";
import Message from "./Message";
import { FormControl, Input, IconButton } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

//          https://www.youtube.com/watch?v=KB7JEnfc7Dc&list=PLlBzNJv1tsht93h2D6Y1Vt0pQgYbmT4S1&index=90
//          firebase -> 1:20:00 & deploy -> 2:32:00

function FacebookMessengerApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "", username: "", message: "" },
  ]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="FM__home">
      <h1>Welcome to the Facebook Messenger App</h1>
      <h2>{userName}</h2>
      <QuestionAnswerIcon fontSize="large" color="primary" />
      <form className="FM__home__form">
        <FormControl className="FM__home__form__formControl">
          <Input
            className="FM__home__form__formControl__input"
            placeholder="Enter message..."
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="FM__home__form__formControl__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={(event) => sendMessage(event)}
          >
            <SendIcon fontSize="large" />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove className="FM__home__flipMove">
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default FacebookMessengerApp;
