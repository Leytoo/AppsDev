import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Button from './Button';

const Profile = () => {
  return (
    <div className="profile-layout">
      <div className="profile-left">
        <ProfilePicture />
      </div>
      <div className="profile-right">
        <AboutMe />
        <Skills />
        <Button />
      </div>
    </div>
  );
};

export default Profile;
