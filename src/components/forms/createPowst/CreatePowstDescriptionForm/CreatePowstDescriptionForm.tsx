// import react
import { useRef } from 'react';

// import rrd
import { useNavigate } from 'react-router-dom';

// import icons
import { FiChevronsRight } from 'react-icons/fi';

// import react mdx editor
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

// import hooks
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

export default function CreatePowstDescriptionForm() {
  const navigate = useNavigate();

  const { setActiveStep } = useCreatePowst();

  const ref = useRef<MDXEditorMethods>(null);

  const onCreatePowstNameSubmit = () => {
    console.log(ref.current?.getMarkdown());

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
          markdown='# Hello world'
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
          onChange={console.log}
          className='mdx_editor'
        />
      </div>

      {/* <button onClick={() => console.log(ref.current?.getMarkdown())}>
        Get markdown
      </button> */}

      <div className='flex justify-between w-full'>
        <CreatePowstPreviousButton link='/create/basic' />

        <button
          className='btn btn-primary'
          onClick={onCreatePowstNameSubmit}
        >
          Save and Next <FiChevronsRight className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}

// TODO => Know issues
// 1. TailwindCSS is resetting most of the default styling, so, we need to change everything on our own
// 2. The buttons are a nuisance, need to find a way to change them
