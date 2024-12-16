import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.username}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <div>
        <ul className={s.followers}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>

          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
