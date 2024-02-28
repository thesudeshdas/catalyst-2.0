import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuChevronsRight, LuInfo } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { techIcons } from '../../../../assets/resources/techStack.icons';
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import { ICreatePowstTechForm } from '../../../../types/createPowstTypes/createPowst.types';
import TextInput from '../../../inputs/TextInput/TextInput';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

import { createPowstTechSchema } from './createPowstTechForm.schema';

export default function CreatePowstTechForm() {
  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();

  const navigate = useNavigate();

  const { handleSubmit, control, watch } = useForm<ICreatePowstTechForm>({
    resolver: zodResolver(createPowstTechSchema),
    defaultValues: {
      tech: ''
    }
  });

  const [selectedTech, setSelectedTech] = useState<
    { name: string; version: string }[]
  >(localPowst?.techStack || []);

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstTechForm> = () => {
    savePowstInLocal({
      techStack: selectedTech
    });

    setActiveStep(3);
    navigate('/create/image');
  };

  const handleAddTech = (techToBeAdded: { name: string; version: string }) => {
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
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.version}.svg`}
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
                    version: icon.version.svg[0]
                  })
                }
                type='button'
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.version.svg[0]}.svg`}
                  alt={icon.name}
                  className='h-8 w-8'
                  key={icon.name}
                />
              </button>
            ))}
        </div>
      </div>

      <div className='flex justify-between w-full'>
        <CreatePowstPreviousButton link='/create/description' />

        <div className='flex items-center gap-2'>
          <button
            className='btn btn-primary'
            disabled={selectedTech?.length === 0}
          >
            Save and Next <LuChevronsRight className='h-6 w-6' />
          </button>

          {selectedTech?.length === 0 && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip='You need to add at least one tech'
            >
              <LuInfo className='h-5 w-5' />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
