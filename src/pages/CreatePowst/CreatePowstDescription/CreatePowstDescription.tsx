import CreatePowstDescriptionForm from '../../../components/forms/createPowst/CreatePowstDescriptionForm/CreatePowstDescriptionForm';

export default function CreatePowstDescription() {
  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Description</h2>

      <CreatePowstDescriptionForm />
    </main>
  );
}
