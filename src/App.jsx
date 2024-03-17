import './App.css'
import Profile from './components/profile/Profile';
import userData from './components/userData.json';
import friends from './components/friends.json';
import FriendList from './components/friend/FriendList';
import transactions from './components/transactions.json';
import TransactionHistory from './components/transaction/TransactionHistory'



export default function App() {
  return (
    <>
      
           <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />


       {friends.map((friends) => (
        <FriendList key={friends.id} {...friends} />
      ))}
    
      <TransactionHistory items={transactions} />

    </>
  );
}