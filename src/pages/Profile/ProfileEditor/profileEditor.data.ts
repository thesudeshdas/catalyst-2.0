// import components
import EditProfileBasicForm from '../../../components/forms/editProfile/EditProfileBasicForm/EditProfileBasicForm';
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
  }
];

// TODO @thesudeshdas => to be added
// projects
// blogs
// work
// about
// contact
