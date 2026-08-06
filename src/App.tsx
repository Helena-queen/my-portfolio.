import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#050b14] text-white relative overflow-hidden">
      <div className="absolute top-20 right-32 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
