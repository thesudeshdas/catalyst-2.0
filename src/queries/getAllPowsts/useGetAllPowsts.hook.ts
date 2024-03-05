import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import { IPowst } from '../../types/powstTypes/powst.types';

const getAllPowsts = (): Promise<IPowst[]> =>
  axiosClient.get('/powst').then((res) => res.data);

export function useGetAllPowsts() {
  return useQuery({ queryKey: ['allPowsts'], queryFn: getAllPowsts });
}
