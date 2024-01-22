import CreatePowstImageForm from '../../../components/forms/createPowst/CreatePowstImageForm/CreatePowstImageForm';

export default function CreatePowstImage() {
  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Upload Image</h2>

      <CreatePowstImageForm />
    </main>
  );
}
