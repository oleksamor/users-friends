import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = () => {
  return (
    <div>
      <ul className={s.friendItems}>
        <li className={s.friend}>
          <FriendListItem />
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
