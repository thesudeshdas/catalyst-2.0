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
  }
];

// TODO @thesudeshdas => to be added
// projects
// blogs
// work
// about
// contact
