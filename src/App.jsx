import './App.css'
import Profile from './copmonents/profile/Profile';
import userData from './copmonents/userData.json';
import friends from './copmonents/friends.json';
import FriendList from './copmonents/friend/FriendList';
import transactions from './copmonents/transactions.json';
import TransactionHistory from './copmonents/transaction/TransactionHistory'

// src/components/App.jsx

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