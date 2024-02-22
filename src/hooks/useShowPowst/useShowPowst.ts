import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

interface IAppLayoutContext {
  powstToBeShown: string;
  setPowstToBeShown: Dispatch<SetStateAction<string>>;
}

export default function useShowPowst() {
  return useOutletContext<IAppLayoutContext>();
}
