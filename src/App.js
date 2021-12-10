import './App.css';
import FriendList from './components/friendList/FriendList';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import data from './data';

const { user, statistics, friends, transactions } = data;

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Statistics" data={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
