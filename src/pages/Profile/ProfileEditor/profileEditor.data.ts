import EditProfileAboutForm from '../../../components/forms/editProfile/EditProfileAboutForm/EditProfileAboutForm';
import EditProfileBasicForm from '../../../components/forms/editProfile/EditProfileBasicForm/EditProfileBasicForm';
import EditProfileProjectForm from '../../../components/forms/editProfile/EditProfileProjectForm/EditProfileProjectForm';
import EditProfileSocialForm from '../../../components/forms/editProfile/EditProfileSocialForm/EditProfileSocialForm';
import EditProfileWorkForm from '../../../components/forms/editProfile/EditProfileWorkForm/EditProfileWorkForm';

export const profileEditorOptions: {
  nameId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  heading: string;
}[] = [
  {
    nameId: 'edit_profile_basic_form',
    heading: 'Basic',
    form: EditProfileBasicForm
  },
  {
    nameId: 'edit_profile_social_form',
    heading: 'Socials',
    form: EditProfileSocialForm
  },
  {
    nameId: 'edit_profile_projects_form',
    heading: 'Projects',
    form: EditProfileProjectForm
  },
  {
    nameId: 'edit_profile_work_form',
    heading: 'Work',
    form: EditProfileWorkForm
  },
  {
    nameId: 'edit_profile_about_form',
    heading: 'About',
    form: EditProfileAboutForm
  }
];
