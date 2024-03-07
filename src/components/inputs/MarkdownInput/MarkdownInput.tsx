/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { LuInfo } from 'react-icons/lu';
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

interface IMarkdownInputProps {
  label?: string;
  placeholder?: string;
  tip?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function MarkdownInput(
  props: IMarkdownInputProps & UseControllerProps<any>
) {
  console.log({ props });

  const {
    field,
    fieldState: { error }
  } = useController(props);

  const ref = useRef<MDXEditorMethods>(null);

  const [markdownInEditor, setMarkdownInEditor] = useState<string>(
    field.value || ''
  );

  const handleMarkdownChange = (markdownText: string) => {
    setMarkdownInEditor(markdownText);

    field.onChange(markdownText);
  };

  return (
    <div className='form-control w-full'>
      {(props.label || props.tip) && (
        <div className='flex items-center'>
          {props.label && (
            <div className='label gap-1'>
              <span className='label-text'>{props.label}</span>
              <span className='label-text text-error'>
                {props.required && '*'}
              </span>
            </div>
          )}

          {props.tip && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip={props.tip}
            >
              <LuInfo className='h-3 w-3' />
            </div>
          )}
        </div>
      )}

      <div className='join'>
        <div className=' w-full border rounded-md '>
          <MDXEditor
            markdown={markdownInEditor}
            {...field}
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
            placeholder={props.placeholder}
            ref={ref}
            onChange={handleMarkdownChange}
            className='mdx_editor'
          />
        </div>
      </div>

      {error && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {error?.message}
          </span>
        </div>
      )}
    </div>
  );
}
