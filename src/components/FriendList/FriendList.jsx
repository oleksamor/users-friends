import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ props }) => {
  return (
    <div>
      <ul className={s.friendItems}>
        {props.map((item) => (
          <li key={item.id} className={s.friend}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
