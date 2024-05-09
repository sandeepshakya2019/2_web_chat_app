/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { samepleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.id;
    return (
      <div>
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList
              w="100%"
              chatId={String(chatId)}
              chats={samepleChats}
              // onlineUsers={[]}
              // newMessagesAlert={[
              //   {
              //     chatId: "2",
              //     count: 3,
              //   },
              // ]}
              handleDeleteChat={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile user={samepleChats[0]} />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
