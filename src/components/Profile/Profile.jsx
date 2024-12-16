import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.username}>{name}</p>
        <p className={s.usertag}>{tag}</p>
        <p className={s.userlocation}>{location}</p>
      </div>

      <div>
        <ul className={s.followers}>
          <li className={s.item}>
            <span className={s.txt}>Followers</span>
            <span className={s.nmbr}>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.txt}>Views</span>
            <span className={s.nmbr}>{stats.views}</span>
          </li>

          <li className={s.item}>
            <span className={s.txt}>Likes</span>
            <span className={s.nmbr}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
