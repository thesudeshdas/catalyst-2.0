import EditProfileAboutForm from '../../../components/forms/editProfile/EditProfileAboutForm/EditProfileAboutForm';
import EditProfileBasicForm from '../../../components/forms/editProfile/EditProfileBasicForm/EditProfileBasicForm';
import EditProfileProjectForm from '../../../components/forms/editProfile/EditProfileProjectForm/EditProfileProjectForm';
import EditProfileSocialForm from '../../../components/forms/editProfile/EditProfileSocialForm/EditProfileSocialForm';

export const profileEditorOptions: {
  nameId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  heading: string;
}[] = [
  {
    nameId: 'edit_profile_basic_modal',
    heading: 'Basic',
    form: EditProfileBasicForm
  },
  {
    nameId: 'edit_profile_social_modal',
    heading: 'Socials',
    form: EditProfileSocialForm
  },
  {
    nameId: 'edit_profile_projects_modal',
    heading: 'Projects',
    form: EditProfileProjectForm
  },
  {
    nameId: 'edit_profile_about_modal',
    heading: 'About',
    form: EditProfileAboutForm
  }
];

// TODO @thesudeshdas => to be added
// blogs
// work
// about
// contact
