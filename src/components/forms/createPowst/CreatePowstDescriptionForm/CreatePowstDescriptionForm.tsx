import { useRef, useState } from 'react';
import { LuChevronsRight } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo
} from '@mdxeditor/editor';

import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

import '@mdxeditor/editor/style.css';

export default function CreatePowstDescriptionForm() {
  const navigate = useNavigate();

  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();

  const ref = useRef<MDXEditorMethods>(null);

  const [markdownInEditor, setMarkdownInEditor] = useState<string>(
    localPowst?.description
  );

  const handleMarkdownChange = (markdownText: string) => {
    setMarkdownInEditor(markdownText);
  };

  const onCreatePowstNameSubmit = () => {
    savePowstInLocal({
      description: ref.current?.getMarkdown()
    });

    setActiveStep(2);
    navigate('/create/tech');
  };

  return (
    <form
      noValidate
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
    >
      <div className=' w-full border rounded-md'>
        <MDXEditor
          markdown={markdownInEditor}
          plugins={[
            headingsPlugin(),
            quotePlugin(),
            listsPlugin(),
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
            })
          ]}
          ref={ref}
          onChange={handleMarkdownChange}
          className='mdx_editor'
        />
      </div>

      <div className='flex justify-between w-full'>
        <CreatePowstPreviousButton link='/create/basic' />

        <button
          className='btn btn-primary'
          type='button'
          onClick={onCreatePowstNameSubmit}
        >
          Save and Next <LuChevronsRight className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}

// TODO => Know issues
// 1. TailwindCSS is resetting most of the default styling, so, we need to change everything on our own
// 2. The buttons are a nuisance, need to find a way to change them
