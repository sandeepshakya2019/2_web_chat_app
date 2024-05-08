import React, { useEffect } from "react";
import AppLayout from "../Components/Layouts/AppLayout";

function Chat() {
  useEffect(() => {
    document.title = "Chat App | User name";
  }, []);
  return <div>Chat</div>;
}

export default AppLayout()(Chat);
