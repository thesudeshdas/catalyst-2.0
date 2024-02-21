// import react
import { useEffect, useState } from 'react';

// import rrd
import { Outlet } from 'react-router-dom';

// import hooks
import useBlocker from '../../contexts/BlockerContext/blockerContext.hook';

// import components
import CreateTopNav from '../../components/navs/CreateTopNav/CreateTopNav';
import BlockerModal from '../../components/modals/BlockerModal/BlockerModal';

// import types
import { IPowst } from '../../types/createPowstTypes/createPowst.types';

export default function CreatePowstLayout() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const { blocked, showBlockerModal, cancelNavigation, discardAndNavigate } =
    useBlocker();

  const localPowstFromStorage: string =
    localStorage?.getItem('localPowst') || '';

  const [localPowst, setLocalPowst] = useState<Partial<IPowst>>(
    localPowstFromStorage
      ? JSON.parse(localPowstFromStorage)
      : {
          description: ''
        }
  );

  const savePowstInLocal = (data: Partial<IPowst>) => {
    setLocalPowst((prevLocalPowst) => ({ ...prevLocalPowst, ...data }));
  };

  const clearPowstInLocal = () => {
    setLocalPowst({ description: '' });
    localStorage.removeItem('localPowst');
  };

  useEffect(() => {
    localStorage.setItem(
      'localPowst',
      JSON.stringify({ ...localPowst, image: undefined })
    );
  }, [localPowst]);

  useEffect(() => {
    if (blocked && showBlockerModal) {
      (
        document.getElementById('blocker_navigation_modal') as HTMLDialogElement
      )?.showModal();
    }
  }, [blocked, showBlockerModal]);

  return (
    <div className='flex flex-col min-h-full max-w-[1400px] mx-auto'>
      <CreateTopNav clearPowstInLocal={clearPowstInLocal} />

      {blocked && showBlockerModal && (
        <BlockerModal
          cancelNavigation={cancelNavigation}
          discardAndNavigate={discardAndNavigate}
          executeFunction={clearPowstInLocal}
        />
      )}

      <ul className='steps max-w-[800px] mx-auto w-full py-6 lg:my-8 xl:my-12 sticky top-14 bg-base-100 z-10'>
        <li className={`step ${activeStep >= 0 ? 'step-primary' : ''} text-xs`}>
          Basic details
        </li>
        <li className={`step ${activeStep >= 1 ? 'step-primary' : ''} text-xs`}>
          Description
        </li>
        <li className={`step ${activeStep >= 2 ? 'step-primary' : ''} text-xs`}>
          Tech stack
        </li>
        <li className={`step ${activeStep >= 3 ? 'step-primary' : ''} text-xs`}>
          Image
        </li>
        <li className={`step ${activeStep >= 4 ? 'step-primary' : ''} text-xs`}>
          Review
        </li>
      </ul>

      <div className='flex-grow p-3 lg:px-5'>
        <Outlet
          context={{
            setActiveStep,
            localPowst,
            savePowstInLocal,
            clearPowstInLocal
          }}
        />
      </div>
    </div>
  );
}
