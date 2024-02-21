import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBlockerContext } from '../../types/blockerTypes/blocker.types';

export const BlockerContext = createContext<IBlockerContext>({
  blocked: false,
  showBlockerModal: false,
  setBlocked: () => {},
  cancelNavigation: () => {},
  discardAndNavigate: () => {},
  blockedNavigation: () => {}
});

export default function BlockerProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const [blocked, setBlocked] = useState<boolean>(false);
  const [showBlockerModal, setShowBlockerModal] = useState<boolean>(false);
  const [navigateTo, setNavigateTo] = useState<string>('');

  const blockedNavigation = (
    navigationLink: string,
    executeFunction?: Function
  ) => {
    if (blocked) {
      setNavigateTo(navigationLink);
      setShowBlockerModal(true);
    } else {
      navigate(navigationLink);

      if (executeFunction) {
        executeFunction();
      }
    }
  };

  const cancelNavigation = () => {
    setShowBlockerModal(false);
    setNavigateTo('');
  };

  const discardAndNavigate = (executeFunction?: Function): void => {
    setShowBlockerModal(false);
    setBlocked(false);

    if (executeFunction) {
      executeFunction();
    }

    navigate(navigateTo);

    setNavigateTo('');
  };

  return (
    <BlockerContext.Provider
      value={{
        blocked,
        showBlockerModal,
        setBlocked,
        cancelNavigation,
        discardAndNavigate,
        blockedNavigation
      }}
    >
      {children}
    </BlockerContext.Provider>
  );
}
