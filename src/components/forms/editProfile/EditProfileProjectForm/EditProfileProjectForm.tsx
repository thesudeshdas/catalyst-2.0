// import react
import { useCallback, useState } from 'react';

// import helper
import update from 'immutability-helper';

// import react-dnd
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import components
import DragCard from '../../../drag/DragCard';

// import types
import { IDragItem } from '../../../../types/dragTypes/drag.types';

export default function EditProfileProjectForm() {
  const [cards, setCards] = useState<IDragItem[]>([
    {
      id: '1',
      text: 'Write a cool JS library'
    },
    {
      id: '2',
      text: 'Make it generic enough'
    },
    {
      id: '3',
      text: 'Write README'
    },
    {
      id: '4',
      text: 'Create some examples'
    },
    {
      id: '5',
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
    },
    {
      id: '6',
      text: '???'
    },
    {
      id: '7',
      text: 'PROFIT'
    }
  ]);

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
    []
  );

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto overflow-auto'
      //   onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <h3 className='font-bold text-lg'>Projects</h3>

      <DndProvider backend={HTML5Backend}>
        <ul>{cards.map((card, i) => renderCard(card, i))}</ul>
      </DndProvider>

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
        >
          Cancel
        </button>

        {/* <button className='btn btn-primary'>Save</button> */}
      </div>
    </form>
  );
}

// TODO @thesudeshdas => Create a react query mutation for updating the order of the projects
