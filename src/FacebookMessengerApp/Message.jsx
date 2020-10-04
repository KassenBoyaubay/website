import React, { forwardRef } from "react";
import "./Message.scss";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  return (
    <div
      ref={ref}
      className={`FM__message__card ${isUser && "FM__message__user"}`}
    >
      <Card
        className={isUser ? "FM__message__userCard" : "FM__message__guestCard"}
      >
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
