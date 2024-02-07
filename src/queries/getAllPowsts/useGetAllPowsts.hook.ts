// import axios

// import react-query
import { useQuery } from '@tanstack/react-query';

// import notistack

// import axios client
import axiosClient from '../../config/axiosInstance';

// import utils

// import types
import { IPowst } from '../../types/createPowstTypes/createPowst.types';

const getAllPowsts = (): Promise<IPowst[]> =>
  axiosClient.get('/powst').then((res) => res.data);

export function useGetAllPowsts() {
  return useQuery({ queryKey: ['allPowsts'], queryFn: getAllPowsts });
}
