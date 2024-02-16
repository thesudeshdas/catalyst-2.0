// import react
import { useEffect } from 'react';

// import rrd
import { useNavigate } from 'react-router-dom';

// import components
import ProfileEditor from '../Profile/ProfileEditor/ProfileEditor';

export default function EditProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navigate('/profile'); // this should be the profile page for the auth user
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log({ check: window.innerWidth });

  return <ProfileEditor alwaysOpen />;
}

// TODO @thesudeshdas => Check the navigate on large screens
