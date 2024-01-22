/* eslint-disable @typescript-eslint/no-unused-vars */
// import rrd
import { useNavigate } from 'react-router-dom';

// import react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import hooks
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { createPowstTechSchema } from './createPowstTechForm.schema';

// import types
import { ICreatePowstTechForm } from '../../../../types/createPowstTypes/createPowst.types';
import { techIcons } from '../../../../assets/resources/techStack.icons';
import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

export default function CreatePowstTechForm() {
  const { setActiveStep } = useCreatePowst();

  const navigate = useNavigate();

  const { handleSubmit, control, watch } = useForm<ICreatePowstTechForm>({
    resolver: zodResolver(createPowstTechSchema),
    defaultValues: {
      tech: ''
    }
  });

  const [selectedTech, setSelectedTech] = useState<
    { name: string; versions: string }[]
  >([]);

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstTechForm> = (
    data
  ) => {
    console.log({ data });
    setActiveStep(3);

    navigate('/create/image');
  };

  const handleAddTech = (techToBeAdded: { name: string; versions: string }) => {
    !selectedTech?.find((tech) => tech.name === techToBeAdded.name)
      ? setSelectedTech((prevTech) => [...prevTech, techToBeAdded])
      : null;
  };

  const handleRemoveTech = (techToBeRemoved: string) => {
    setSelectedTech((prevTech) =>
      prevTech.filter((item) => item.name !== techToBeRemoved)
    );
  };

  const watchSearch = watch('tech');

  console.log({ watch: watch('tech'), selectedTech });

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <div className='w-full'>
        <TextInput
          control={control}
          name='tech'
          placeholder='Search for your desired language'
        />

        <div className='grid grid-cols-[repeat(auto-fill,24px)] gap-12 p-4 mt-2'>
          {selectedTech.map((icon) => (
            <button
              className='btn btn-ghost btn-square'
              onClick={() => handleRemoveTech(icon.name)}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.versions}.svg`}
                alt={icon.name}
                className='h-8 w-8 object-contain'
                key={icon.name}
              />
            </button>
          ))}
        </div>
      </div>

      <div className='w-full'>
        <h3 className='font-semibold'>Choose a tech</h3>

        <div className='grid grid-cols-[repeat(auto-fill,24px)] gap-12 p-4 mt-2 border input-bordered rounded-md'>
          {techIcons
            ?.filter((icon) =>
              icon.name.includes(watchSearch?.toLowerCase()?.replace(/ /g, ''))
            )
            .map((icon) => (
              <button
                className='btn btn-ghost btn-square'
                onClick={() =>
                  handleAddTech({
                    name: icon.name,
                    versions: icon.versions.svg[0]
                  })
                }
                type='button'
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.versions.svg[0]}.svg`}
                  alt={icon.name}
                  className='h-8 w-8'
                  key={icon.name}
                />
              </button>
            ))}
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <button
          className='btn btn-primary'
          disabled={selectedTech?.length === 0}
        >
          Save and Next
        </button>

        {selectedTech?.length === 0 && (
          <div
            className='tooltip tooltip-right cursor-pointer'
            data-tip='You need to add at least one tech'
          >
            <FiInfo className='h-5 w-5' />
          </div>
        )}
      </div>
    </form>
  );
}