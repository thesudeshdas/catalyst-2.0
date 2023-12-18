// import react
import { ReactElement, useEffect, useRef, useState } from 'react';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

// props type
export interface IImage {
  src: string;
  alt: string;
}

interface IAuthLayoutProps {
  children: ReactElement;
  imgSources: {
    small: IImage;
    medium?: IImage;
    large?: IImage;
  };
}

export default function AuthPageLayout({
  children,
  imgSources
}: IAuthLayoutProps) {
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
  }, []);

  return (
    <main className='h-screen flex'>
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
          className='h-full w-full hidden md:block flex-grow-1 min-w-0 max-w-[512px] xl:min-w-[520px] object-cover'
        />
      </picture>

      {children}

      <div className='fixed w-6 sm:w-8 top-0 right-2 sm:bottom-2 sm:top-auto sm:right-4'>
        <ThemeToggle />
      </div>
    </main>
  );
}
