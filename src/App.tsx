import React from "react";
import ProfileCard from "./components/ProfileCard";
const avatar = "/2x2.jpg"; // Accessing from the public folder

const App: React.FC = () => {
  return (
    <div className="app">
      <ProfileCard name="Kheanne Miguel" bio="Passionate developer" avatar={avatar} />
    </div>
  );
};

export default App;