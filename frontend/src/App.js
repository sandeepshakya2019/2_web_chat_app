import React, { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    toast.success("msg");
  }, []);
  return <div className="App">App</div>;
}

export default App;
