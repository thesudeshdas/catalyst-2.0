import CreatePowstTechForm from '../../../components/forms/createPowst/CreatePowstTechForm/CreatePowstTechForm';

export default function CreatePowstTech() {
  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Tech Stack</h2>

      <CreatePowstTechForm />
    </main>
  );
}
