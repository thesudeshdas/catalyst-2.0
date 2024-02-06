export interface IEditProfileBasicForm {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  headline?: string;
}
