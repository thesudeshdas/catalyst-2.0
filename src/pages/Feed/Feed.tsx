// import components
import Powst from '../../components/Powst/Powst';
import PowstDetailsModal from '../../components/Powst/PowstDetailsModal/PowstDetailsModal';

export default function Feed() {
  return (
    <main className='flex flex-col'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <Powst />

        <PowstDetailsModal />
      </div>
    </main>
  );
}
