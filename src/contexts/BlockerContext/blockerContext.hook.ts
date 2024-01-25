import { useContext } from 'react';
import { BlockerContext } from './BlockerContext';

export default function useBlocker() {
  return useContext(BlockerContext);
}
