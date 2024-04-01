import { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { LuPlus } from 'react-icons/lu';
import update from 'immutability-helper';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import { useGetAllUserWorks } from '../../../../queries/getAllUserWorks/useGetAllUserWorks.hook';
import { IDragItem } from '../../../../types/dragTypes/drag.types';
import { IUserWork } from '../../../../types/userTypes/user.types';
import DragCard from '../../../drag/DragCard';

interface IEditProfileWorkFormProps {
  setActiveProfile: (formName: string) => void;
}

export default function EditProfileWorkForm({
  setActiveProfile
}: IEditProfileWorkFormProps) {
  const { authState } = useAuthContext();

  const { data: allUserWorks } = useGetAllUserWorks({
    userId: authState.userId
  });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending
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
    if (allUserWorks && allUserWorks.length > 0) {
      const dataToBePut: IDragItem[] = allUserWorks?.reduce(
        (acc: IDragItem[], cur: IUserWork): IDragItem[] => [
          ...acc,
          { id: cur.work._id, text: cur.work.designation }
        ],
        []
      );

      setCards(dataToBePut);
    }
  }, [allUserWorks]);

  return (
    <form className='flex flex-col gap-6 items-center w-full mx-auto overflow-auto no-scrollbar'>
      <div className='w-full flex justify-between items-center'>
        <h3 className='font-bold text-lg'>Edit Work Experience</h3>

        <button
          className='btn btn-neutral btn-sm'
          onClick={() => setActiveProfile('work-new')}
        >
          <LuPlus className='h-4 w-4' />
          Add Work
        </button>
      </div>

      <DndProvider backend={HTML5Backend}>
        <ul className='w-full'>
          {cards.map((card, i) => renderCard(card, i))}
        </ul>
      </DndProvider>

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
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
