import './App.css'
import Profile from './profile/Profile';
import userData from './userData.json';
import friends from './friends.json';
import FriendList from './friend/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './transaction/TransactionHistory'

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