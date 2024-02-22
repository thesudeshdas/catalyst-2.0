import { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import { useGetAllUserPowsts } from '../../../../queries/getAllUserPowsts/useGetAllUserPowsts.hook';
import { IDragItem } from '../../../../types/dragTypes/drag.types';
import { IUserPowst } from '../../../../types/userTypes/user.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import DragCard from '../../../drag/DragCard';

export default function EditProfileProjectForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: allUsersPowsts } = useGetAllUserPowsts({
    userId: authState.userId
  });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const [cards, setCards] = useState<IDragItem[]>([]);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: IDragItem[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as IDragItem]
        ]
      })
    );
  }, []);

  const renderCard = useCallback(
    (card: { id: string; text: string }, index: number) => {
      return (
        <DragCard
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  const handleSaveReorder = () => {
    const sanitisedPowsts = cards.reduce(
      (acc: { powst: string }[], cur: IDragItem) => [...acc, { powst: cur.id }],
      []
    );

    updateUserDetailsMutation({
      powsts: sanitisedPowsts,
      userId: authState.userId
    });
  };

  useEffect(() => {
    if (allUsersPowsts && allUsersPowsts.length > 0) {
      const dataToBePut: IDragItem[] = allUsersPowsts?.reduce(
        (acc: IDragItem[], cur: IUserPowst): IDragItem[] => [
          ...acc,
          { id: cur.powst._id, text: cur.powst.title }
        ],
        []
      );

      setCards(dataToBePut);
    }
  }, [allUsersPowsts]);

  useEffect(() => {
    if (isUpdateUserDetailsSuccess) {
      handleCloseModal(nameId);
    }
  }, [isUpdateUserDetailsSuccess, nameId]);

  return (
    <form className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto overflow-auto'>
      <h3 className='font-bold text-lg'>Projects</h3>

      <DndProvider backend={HTML5Backend}>
        <ul className='w-full'>
          {cards.map((card, i) => renderCard(card, i))}
        </ul>
      </DndProvider>

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
          onClick={() => handleCloseModal(nameId)}
          // disabled={isUpdateUserDetailsPending}
        >
          Cancel
        </button>

        <button
          type='button'
          className='btn btn-primary'
          disabled={isUpdateUserDetailsPending}
          onClick={handleSaveReorder}
        >
          {isUpdateUserDetailsPending && (
            <span className='loading loading-spinner'></span>
          )}
          Save
        </button>
      </div>
    </form>
  );
}

// TODO @thesudeshdas => Create a react query mutation for updating the order of the projects
