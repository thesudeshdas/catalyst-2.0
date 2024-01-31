// import components
import { useEffect } from 'react';
import Powst from '../../components/Powst/Powst';
import PowstDetailsModal from '../../components/Powst/PowstDetailsModal/PowstDetailsModal';
import axiosClient from '../../config/axiosInstance';

export default function Feed() {
  useEffect(() => {
    (async () => {
      const res = await axiosClient.get('/powst');

      console.log({ res });
    })();
  }, []);

  return (
    <main className='flex flex-col'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <Powst />

        <Powst />
        <Powst />

        <PowstDetailsModal />
      </div>
    </main>
  );
}
