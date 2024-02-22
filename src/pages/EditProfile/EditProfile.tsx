import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useDocumentTitle from '../../hooks/useDocumentTitle/useDocumentTitle';
import ProfileEditor from '../Profile/ProfileEditor/ProfileEditor';

export default function EditProfile() {
  const navigate = useNavigate();

  useDocumentTitle('Catalyst | Edit Profile');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navigate('/profile'); // this should be the profile page for the auth user
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  return <ProfileEditor alwaysOpen />;
}

// TODO @thesudeshdas => Check the navigate on large screens
