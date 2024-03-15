import { useEffect } from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form';
import { LuArrowRight, LuChevronLeft, LuPlus } from 'react-icons/lu';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useBlocker from '../../../../contexts/BlockerContext/blockerContext.hook';
import useCreateWork from '../../../../mutations/createWork/useCreateWork.mutation';
import {
  ICreateWorkBody,
  IEditWorkForm
} from '../../../../types/workTypes/work.types';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import DateInput from '../../../inputs/DateInput/DateInput';
import ImageInput from '../../../inputs/ImageInput/ImageInput';
import LocationInput from '../../../inputs/LocationInput/LocationInput';
import MarkdownInput from '../../../inputs/MarkdownInput/MarkdownInput';
import PillsInput from '../../../inputs/PillsInput/PillsInput';
import SelectInput from '../../../inputs/SelectInput/SelectInput';
import TechInput from '../../../inputs/TechInput/TechInput';
import TextInput from '../../../inputs/TextInput/TextInput';

import { editWorkSchema } from './editWorkForm.schema';
interface IEditWorkFormProps {
  setActiveProfile: (formName: string) => void;
}

export default function EditWorkForm({ setActiveProfile }: IEditWorkFormProps) {
  const { blockedNavigation } = useBlocker();

  const { authState } = useAuthContext();

  const { control, clearErrors, setError, handleSubmit, reset } =
    useForm<IEditWorkForm>({
      resolver: zodResolver(editWorkSchema),
      defaultValues: {}
    });
  const {
    fields: keywordsFields,
    append: appendKeywords,
    remove: removeKeywords
  } = useFieldArray<IEditWorkForm, 'keywords', 'id'>({
    control,
    name: 'keywords'
  });

  const {
    fields: techStackFields,
    append: appendTechStack,
    remove: removeTechStack
  } = useFieldArray<IEditWorkForm, 'techStack', 'id'>({
    control,
    name: 'techStack'
  });

  const {
    mutate: mutateCreateWork,
    isPending: isCreateWorkPending,
    isSuccess: isCreateWorkSuccess
  } = useCreateWork();

  const handleGoBackToAllWork = () => {
    setActiveProfile('work');
    blockedNavigation('/edit-profile?form=work');
  };

  const onEditWorkSubmit: SubmitHandler<IEditWorkForm> = async (data) => {
    // check validation
    if (
      data?.startDate?.month === undefined ||
      data?.startDate?.year === undefined ||
      data?.startDate?.month === 'Select Month' ||
      data?.startDate?.year === 'Select Year'
    ) {
      return setError('startDate', {
        type: 'manual',
        message: 'Please enter a valid start date'
      });
    }

    if (
      data?.endDate?.month === undefined ||
      data?.endDate?.year === undefined ||
      data?.endDate?.month === 'Select Month' ||
      data?.endDate?.year === 'Select Year'
    ) {
      return setError('endDate', {
        type: 'manual',
        message: 'Please enter a valid end date'
      });
    }

    const sanitisedBody: ICreateWorkBody = sanitiseObject({
      ...data,
      keywords: data?.keywords?.reduce(
        (acc: string[], cur: { text: string }) => [...acc, cur.text],
        []
      )
    });

    mutateCreateWork({
      ...sanitisedBody,
      companyLogo: data?.companyLogo,
      owner: authState.userId
    });
  };

  const onSubmitError: SubmitErrorHandler<IEditWorkForm> = (errors) => {
    if (
      errors?.startDate?.month !== undefined ||
      errors?.startDate?.year !== undefined ||
      errors?.startDate?.month === 'Select Month' ||
      errors?.startDate?.year === 'Select Year'
    ) {
      setError('startDate', {
        type: 'manual',
        message: 'Please enter a valid start date'
      });
    }

    if (
      errors?.endDate?.month !== undefined ||
      errors?.endDate?.year !== undefined ||
      errors?.endDate?.month === 'Select Month' ||
      errors?.endDate?.year === 'Select Year'
    ) {
      setError('endDate', {
        type: 'manual',
        message: 'Please enter a valid end date'
      });
    }

    return;
  };

  useEffect(() => {
    if (isCreateWorkSuccess) {
      reset();
    }
  }, [isCreateWorkSuccess, reset]);

  return (
    <form
      className='flex flex-col gap-6 items-center w-full mx-auto overflow-auto'
      onSubmit={handleSubmit(onEditWorkSubmit, onSubmitError)}
    >
      <button
        type='button'
        className='flex items-center self-start'
        onClick={handleGoBackToAllWork}
      >
        <LuChevronLeft className='h-6 w-6 md:h-7 md:w-7 z-10' />

        <p className='text-xs font-semibold'>All Work Experience</p>
      </button>

      <h3 className='font-bold text-lg'>Add Work Experience</h3>

      <div className='w-full flex flex-col md:flex-row gap-4'>
        <div className='flex-shrink-0 md:w-1/3 grid place-items-center'>
          <ImageInput
            name='companyLogo'
            control={control}
            clearErrors={clearErrors}
            setError={setError}
            previewClasses='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center relative mask-squircle'
            adderComponent={
              <div className='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative mask-squircle text-xs text-center'>
                <LuPlus className='w-16 h-16' />
                Upload <br /> Organisation Logo
                <label
                  htmlFor='upload'
                  className='absolute cursor-pointer w-full h-full opacity-0'
                ></label>
              </div>
            }
          />
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <TextInput
            control={control}
            name='company'
            label='Organisation'
            placeholder='The Tech Company'
            required
          />

          <TextInput
            control={control}
            name='companyWebsite'
            label='Website'
            placeholder='www.thetechcompany.com'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 md:flex-row w-full'>
        <TextInput
          control={control}
          name='designation'
          label='Designation'
          placeholder='Fullstack Developer'
          required
        />

        <SelectInput
          control={control}
          name='workType'
          options={[
            { label: 'Full Time', value: 'Full Time' },
            { label: 'Part Time', value: 'Part Time' },
            { label: 'Internship', value: 'Internship' },
            { label: 'Freelance', value: 'Freelance' }
          ]}
          label='Type of work'
          required
        />
      </div>

      <div className='flex flex-col gap-2 md:flex-row w-full'>
        <DateInput
          control={control}
          name='startDate'
          label='Start Date'
          required
        />

        <LuArrowRight className='h-4 w-4 flex-shrink-0 translate-y-14 hidden md:block' />

        <DateInput
          control={control}
          name='endDate'
          label='End Date'
          isPresent
          isPresentLabel='I am currently working here'
          required
        />
      </div>

      <LocationInput
        control={control}
        name='location'
        label='Location'
        placeholder='Bangalore, India'
        isRemote
        isRemoteLabel='Working remotely'
      />

      <TechInput
        fields={techStackFields}
        append={appendTechStack}
        remove={removeTechStack}
        label='Technologies used'
        htmlId='edit_work_tech_stack'
        placeholder='Search tech'
      />

      <MarkdownInput
        control={control}
        name='description'
        label='Description'
      />

      <PillsInput
        fields={keywordsFields}
        append={appendKeywords}
        remove={removeKeywords}
        label='Keywords'
        tip='You can add upto 10 items'
        max={10}
        htmlId='edit_work_keywords'
        placeholder='ReactJS, CSS'
      />

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
          onClick={handleGoBackToAllWork}
          disabled={isCreateWorkPending}
        >
          Cancel
        </button>

        <button
          type='submit'
          className='btn btn-primary'
          disabled={isCreateWorkPending}
        >
          {isCreateWorkPending && (
            <span className='loading loading-spinner'></span>
          )}
          Save
        </button>
      </div>
    </form>
  );
}
