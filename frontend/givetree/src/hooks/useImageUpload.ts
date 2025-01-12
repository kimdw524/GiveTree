import { useCallback, useEffect, useRef } from 'react';

export interface ImageData {
  key: number;
  file?: File;
  url?: string;
  done: boolean;
}

interface ImageUploadEventHandler {
  onSelect?: (fileList: FileList) => void;
  onUpload?: (key: number, url: string) => void;
  onError?: (key: number, status: number) => void;
}

const useImageUpload = (
  fileRef: React.RefObject<HTMLInputElement>,
  eventHandler: ImageUploadEventHandler,
  defaultKey: number = 0
) => {
  const keyRef = useRef<number>(defaultKey);

  const select = useCallback(() => {
    fileRef.current?.click();
  }, [fileRef]);

  const upload = useCallback(
    (handleUpload: (files: ImageData[]) => void) => {
      const files = fileRef.current?.files;
      if (!files) {
        return;
      }

      const imageItems: ImageData[] = new Array(files.length)
        .fill(0)
        .map((_, index) => {
          return { key: ++keyRef.current, file: files[index], done: false };
        });

      handleUpload(imageItems);

      imageItems.forEach((imageItem) => {
        if (!imageItem.file) {
          return;
        }

        return uploadImage(
          imageItem.file,
          (url) => {
            eventHandler.onUpload?.(imageItem.key, url);
          },
          (status) => {
            eventHandler.onError?.(imageItem.key, status);
          }
        );
      });
    },
    [fileRef, eventHandler]
  );

  useEffect(() => {
    const file = fileRef.current;
    if (!file) {
      return;
    }

    const handleChange = () => {
      if (!fileRef.current || !fileRef.current.files) {
        return;
      }

      eventHandler.onSelect?.(fileRef.current.files);
    };

    file.addEventListener('change', handleChange);

    return () => {
      file.removeEventListener('change', handleChange);
    };
  }, [fileRef, eventHandler]);

  const uploadImage = (
    file: File,
    onSuccess: (url: string) => void,
    onError: (status: number) => void
  ) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/media`, {
      method: 'POST',
      body: formData,
    })
      .then((result) => {
        if (result.status !== 200) {
          onError(result.status);
          return;
        }

        result
          .text()
          .then((data) => {
            onSuccess(data);
          })
          .catch(() => {
            onError(-1);
          });
      })
      .catch(() => {
        onError(-1);
      });
  };

  return { select, upload };
};

export default useImageUpload;
