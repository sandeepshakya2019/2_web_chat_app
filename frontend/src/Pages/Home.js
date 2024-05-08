import React, { useEffect } from "react";
import AppLayout from "../Components/Layouts/AppLayout";

function Home() {
  useEffect(() => {
    document.title = "Chat App | Home";
  }, []);
  return <div>Home</div>;
}

export default AppLayout()(Home);
