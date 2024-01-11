// import rrd
import { useOutletContext } from 'react-router-dom';

// import types
import { ICreatePowstContext } from '../../types/createPowstTypes/createPowst.types';

export default function useCreatePowst() {
  return useOutletContext<ICreatePowstContext>();
}
