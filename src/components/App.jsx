import user from '../assets/1/user.json';
import data from '../assets/2/data.json';
import friends from '../assets/3/friends.json';
import items from '../assets/4/transactions.json';
import { Profile } from './Profile.jsx';
import { Statistics } from './Statistics.jsx';
import './Profile.styled.js';
import { FriendsList } from './FriendsList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics data={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;
