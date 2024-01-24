import { Dispatch, SetStateAction } from 'react';

export interface IBlockerContext {
  blocked: boolean;
  showBlockerModal: boolean;
  setBlocked: Dispatch<SetStateAction<boolean>>;
  cancelNavigation: () => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  discardAndNavigate: (executeFunction?: Function) => void;
  blockedNavigation: (
    navigationLink: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    executeFunction?: Function
  ) => void;
}
