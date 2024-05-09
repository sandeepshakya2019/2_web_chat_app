import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";

function ChatItem({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) {
  return (
    <Link
      className="chat-item"
      style={{
        textDecoration: "none",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "rgba(0,0,0,0.3)" : "unset",
          color: sameSender ? "black" : "black",
          position: "relative",
          padding: "1rem",
        }}
      >
        <AvatarCard avatar={avatar} />

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
}

export default ChatItem;
