import React from "react";
import "./ProfileCard.css";

interface ProfileProps {
  name: string;
  bio: string;
  avatar: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ name, bio, avatar }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;