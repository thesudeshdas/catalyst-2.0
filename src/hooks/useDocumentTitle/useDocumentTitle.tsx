import { useEffect, useState } from 'react';

export default function useDocumentTitle(title: string) {
  const [documentTitle, setDocumentTitle] = useState<string>(title);

  useEffect(() => {
    document.title = documentTitle;

    return () => {
      document.title = 'Catalyst';
    };
  }, [documentTitle]);

  return { setDocumentTitle };
}
