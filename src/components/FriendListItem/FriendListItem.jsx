import React from "react";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? "Online" : "Offline";
  return (
    <div className={s.friendItem}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.nameItem}>{name}</p>
      <p className={isOnline ? s.green : s.red}>{status}</p>
    </div>
  );
};

export default FriendListItem;
