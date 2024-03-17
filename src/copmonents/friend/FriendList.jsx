import styles from './FriendList.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend} >
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
  );
};

export default FriendList;