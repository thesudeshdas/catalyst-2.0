// import react
import { useEffect, useRef, useState } from 'react';

// declare props types
interface IImage {
  src: string;
  alt: string;
}

interface ICustomImageProps {
  imgSources: {
    small: IImage;
    medium?: IImage;
    large?: IImage;
  };
  aspectRatio?: string;
}

export default function CustomImage({
  imgSources,
  aspectRatio = 'aspect-auto'
}: ICustomImageProps) {
  const widthRef = useRef(window.innerWidth);

  const [altSelection, setAltSelection] = useState<string>(
    imgSources.small.alt
  );

  useEffect(() => {
    if (widthRef?.current && widthRef?.current < 576) {
      setAltSelection(imgSources.small.alt);
    } else if (
      widthRef?.current &&
      widthRef?.current > 992 &&
      imgSources.large
    ) {
      setAltSelection(imgSources.large.alt);
    }
  }, [widthRef, imgSources?.large, imgSources?.small?.alt]);

  return (
    <picture>
      <source
        srcSet={imgSources?.large?.src}
        media='(min-width:1024px)'
      />

      <source
        srcSet={imgSources?.medium?.src}
        media='(min-width:640px)'
      />

      <source srcSet={imgSources?.small?.src} />

      <img
        src={imgSources?.small?.src}
        alt={altSelection}
        className={`h-full w-full object-cover ${aspectRatio}`}
      />
    </picture>
  );
}
