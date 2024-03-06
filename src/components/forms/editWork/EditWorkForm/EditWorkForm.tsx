import { useRef, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { LuChevronLeft, LuPlus } from 'react-icons/lu';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo
} from '@mdxeditor/editor';

import useBlocker from '../../../../contexts/BlockerContext/blockerContext.hook';
import { IEditWorkForm } from '../../../../types/workTypes/work.types';
import ImageInput from '../../../inputs/ImageInput/ImageInput';
import PillsInput from '../../../inputs/PillsInput/PillsInput';
import SelectInput from '../../../inputs/SelectInput/SelectInput';
import TextInput from '../../../inputs/TextInput/TextInput';

import { editWorkSchema } from './editWorkForm.schema';
interface IEditWorkFormProps {
  setActiveProfile: (formName: string) => void;
}

export default function EditWorkForm({ setActiveProfile }: IEditWorkFormProps) {
  const { blockedNavigation } = useBlocker();

  const { control, clearErrors, setError, handleSubmit } =
    useForm<IEditWorkForm>({
      resolver: zodResolver(editWorkSchema)
    });
  const { fields, append, remove } = useFieldArray<
    IEditWorkForm,
    'keywords',
    'id'
  >({
    control,
    name: 'keywords'
  });

  const ref = useRef<MDXEditorMethods>(null);

  const [markdownInEditor, setMarkdownInEditor] = useState<string>('');

  const handleMarkdownChange = (markdownText: string) => {
    setMarkdownInEditor(markdownText);
  };

  const handleGoBackToAllWork = () => {
    setActiveProfile('work');
    blockedNavigation('/edit-profile?form=work');
  };

  const onEditWorkSubmit: SubmitHandler<IEditWorkForm> = async (data) => {
    console.log({ data });
  };

  return (
    <form
      className='flex flex-col gap-6 items-center w-full mx-auto overflow-auto'
      onSubmit={handleSubmit(onEditWorkSubmit)}
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

      <ImageInput
        name='companyLogo'
        control={control}
        clearErrors={clearErrors}
        setError={setError}
        previewClasses='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center relative mask-squircle'
        adderComponent={
          <div className='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative mask-squircle'>
            <LuPlus className='w-16 h-16' />

            <label
              htmlFor='upload'
              className='absolute cursor-pointer w-full h-full opacity-0'
            ></label>
          </div>
        }
      />

      <div className='flex flex-col gap-2 md:flex-row w-full'>
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

      <TextInput
        control={control}
        name='designation'
        label='Designation'
        placeholder='Bangalore, India'
        required
      />

      <SelectInput
        control={control}
        name='workType'
        options={[
          { label: 'Full Time', value: 'full_time' },
          { label: 'Part Time', value: 'part_time' },
          { label: 'Internship', value: 'internship' },
          { label: 'Freelance', value: 'freelance' }
        ]}
        label='Type of work'
        required
      />

      <TextInput
        control={control}
        name='location'
        label='Location'
        placeholder='Bangalore, India'
      />

      <PillsInput
        fields={fields}
        append={append}
        remove={remove}
        label='Keywords'
        tip='You can add upto 10 items'
        max={10}
      />

      <div className=' w-full border rounded-md min-h-48'>
        <MDXEditor
          markdown={markdownInEditor}
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <BlockTypeSelect />
                  <CodeToggle />
                  <CreateLink />
                </>
              )
            }),
            markdownShortcutPlugin()
          ]}
          ref={ref}
          onChange={handleMarkdownChange}
          className='mdx_editor'
        />
      </div>

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
          onClick={handleGoBackToAllWork}
        >
          Cancel
        </button>

        <button
          type='submit'
          className='btn btn-primary'
          //   disabled={isUpdateUserDetailsPending}
        >
          {/* {isUpdateUserDetailsPending && (
            <span className='loading loading-spinner'></span>
          )} */}
          Save
        </button>
      </div>
    </form>
  );
}

// IDEA @thesudeshdas => Create a page giving credits to icon libraries, packages, maintainers, etc

// TODO @thesudeshdas => Create a tech stack input. The input should wait for the user to show option as dropdown. The added ones should be shown on top of the input

// TODO @thesudeshdas => Create a markdown input. The input should take the name of the field and update its value
