import CreatePowstBasicForm from '../../../components/forms/createPowst/CreatePowstBasicForm/CreatePowstBasicForm';

export default function CreatePowstBasic() {
  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Basic Details</h2>

      <CreatePowstBasicForm />
    </main>
  );
}
