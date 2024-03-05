import { useEffect, useState } from 'react';
import { LuChevronLeft } from 'react-icons/lu';
import { useSearchParams } from 'react-router-dom';

import EditProfileAboutForm from '../../components/forms/editProfile/EditProfileAboutForm/EditProfileAboutForm';
import EditProfileBasicForm from '../../components/forms/editProfile/EditProfileBasicForm/EditProfileBasicForm';
import EditProfileProjectForm from '../../components/forms/editProfile/EditProfileProjectForm/EditProfileProjectForm';
import EditProfileSocialForm from '../../components/forms/editProfile/EditProfileSocialForm/EditProfileSocialForm';
import useBlocker from '../../contexts/BlockerContext/blockerContext.hook';
import useDocumentTitle from '../../hooks/useDocumentTitle/useDocumentTitle';
import ProfileEditor from '../Profile/ProfileEditor/ProfileEditor';

export default function EditProfile() {
  useDocumentTitle('Catalyst | Edit Profile');

  const [searchParams, setSearchParams] = useSearchParams();

  const { blockedNavigation } = useBlocker();

  const [activeProfile, setActiveProfile] = useState<string>(
    searchParams.get('form') || 'basic'
  );
  const [profileEditorOpen, setProfileEditorOpen] = useState<boolean>(false);

  const renderEditProfileForm = () => {
    switch (activeProfile) {
      case 'basic':
        return <EditProfileBasicForm nameId='basic' />;

      case 'socials':
        return <EditProfileSocialForm nameId='socials' />;

      case 'projects':
        return <EditProfileProjectForm nameId='projects' />;

      case 'about':
        return <EditProfileAboutForm nameId='about' />;

      default:
        return <EditProfileBasicForm nameId='basic' />;
    }
  };

  const handleActiveForm = (formName: string) => {
    setActiveProfile(formName);
    setSearchParams({ ...searchParams, form: formName });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setProfileEditorOpen(true);
      } else {
        setProfileEditorOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className='w-full'>
      <button
        className='flex items-center mb-4'
        onClick={() => blockedNavigation('/profile')}
      >
        <LuChevronLeft className='h-6 w-6 md:h-7 md:w-7 z-10' />

        <p className='text-xs font-semibold'>Back to profile</p>
      </button>

      <div className='w-full flex flex-col sm:flex-row-reverse gap-6 sm:overflow-hidden sm:max-h-[83vh] '>
        <div className='sticky top-12 z-10 flex-shrink-0 sm:!w-1/4 min-w-[250px]'>
          <ProfileEditor
            setActiveProfile={handleActiveForm}
            activeProfile={activeProfile}
            alwaysOpen={profileEditorOpen}
          />
        </div>

        <div className='w-full overflow-auto border textarea-bordered rounded-md p-4'>
          {renderEditProfileForm()}
        </div>
      </div>
    </main>
  );
}

// TODO @thesudeshdas => Check the navigate on large screens
