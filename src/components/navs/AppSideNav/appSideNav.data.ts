import {
  LuBriefcase,
  LuCompass,
  LuFileSignature,
  LuPlusSquare
} from 'react-icons/lu';

export const appSideNavLinks = [
  {
    link: '/feed',
    icon: LuCompass,
    text: 'Inspiration'
  },
  {
    link: '/profile',
    icon: LuBriefcase,
    text: 'Portfolio'
  },
  {
    link: '/create/basic',
    icon: LuPlusSquare,
    text: 'Create'
  },
  {
    link: '/edit-profile',
    icon: LuFileSignature,
    text: 'Edit Profile'
  }
];
