import { Dispatch, SetStateAction } from 'react';

export interface IBlockerContext {
  blocked: boolean;
  showBlockerModal: boolean;
  setBlocked: Dispatch<SetStateAction<boolean>>;
  cancelNavigation: () => void;
  discardAndNavigate: (executeFunction?: Function) => void;
  blockedNavigation: (
    navigationLink: string,
    executeFunction?: Function
  ) => void;
}
