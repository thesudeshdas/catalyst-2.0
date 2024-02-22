import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import { imageMimeType } from '../../../constants/image.constants';
import CustomImage from '../../images/CustomImage/CustomImage';

interface IImageInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  clearErrors: Function;
  defaultPicture?: string;
  setError: Function;
  aspectRatio?: string;
  adderComponent: ReactNode;
  previewClasses: string;
}

export default function ImageInput({
  name,
  control,
  clearErrors,
  defaultPicture,
  setError,
  aspectRatio = 'aspect-[1/1]',
  previewClasses,
  adderComponent
}: IImageInputProps) {
  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>(
    defaultPicture || ''
  );

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
  ) => {
    clearErrors(name);

    const file = event?.target?.files?.[0];

    if (!file?.type.match(imageMimeType)) {
      setError(name, {
        type: 'manual',
        message: 'Image type is not supported'
      });
      return;
    } else {
      setFile(file);
      onChange(event.target?.files?.[0]);
    }
  };

  // For handling the preview of the uploaded image
  useEffect(() => {
    let fileReader: FileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;

        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  console.log({ file });

  return (
    <>
      {fileDataURL ? (
        <div className={previewClasses}>
          <CustomImage
            imgSources={{
              small: {
                alt: 'User uploaded',
                src: String(fileDataURL)
              }
            }}
            aspectRatio={aspectRatio}
          />

          <label
            htmlFor='upload'
            className='absolute cursor-pointer w-full h-full opacity-0'
          ></label>
        </div>
      ) : (
        adderComponent
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <input
              {...field}
              value={value?.fileName}
              onChange={(event) => handleImageUpload(event, onChange)}
              type='file'
              id='upload'
              className='file-input input-sm cursor-pointer hidden'
              accept='image/png, image/jpeg, image/jpg'
            />
          );
        }}
      />
    </>
  );
}
