import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import { React } from "react-dom";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "./TransactionHistory.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList props={friends} />
      <TransactionHistory transactions={transactions} />
      console.log(transactions);
    </div>
  );
};

export default App;
