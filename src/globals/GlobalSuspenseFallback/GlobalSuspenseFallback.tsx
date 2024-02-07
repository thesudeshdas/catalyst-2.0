export default function GlobalSuspenseFallback() {
  return (
    <div
      role='alert'
      className='grid place-items-center flex-grow h-full'
    >
      <span className='loading loading-infinity w-32'></span>
    </div>
  );
}
