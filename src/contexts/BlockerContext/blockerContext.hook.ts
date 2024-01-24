import { useContext } from 'react';
import { BlockerContext } from './BlockerContext';

export function useBlocker() {
  return useContext(BlockerContext);
}
