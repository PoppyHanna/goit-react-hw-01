import PropTypes from 'prop-types'; // Імпортуємо PropTypes
import styles from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.text}>
          <span>Followers</span>
          <span className={styles.number}>{followers}</span>
        </li>
        <li className={styles.text}>
          <span>Views</span>
          <span className={styles.number}>{views}</span>
        </li>
        <li className={styles.text}>
          <span>Likes</span>
          <span className={styles.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Визначаємо типи пропсів для компонента Profile
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
export default Profile;