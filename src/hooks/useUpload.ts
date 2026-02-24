import { useState, useCallback } from 'react';
import type { UploadItem } from '../types';

let uploadIdCounter = 1;

export function useUpload() {
  const [uploads, setUploads] = useState<UploadItem[]>([
    {
      id: 'upload-1',
      fileName: 'summer_beach_sunset.jpg',
      sizeMB: 4.2,
      totalMB: 6.5,
      progress: 65,
      status: 'uploading',
    },
    {
      id: 'upload-2',
      fileName: 'family_portrait_2023.png',
      sizeMB: 8.1,
      totalMB: 8.1,
      progress: 100,
      status: 'processing',
    },
  ]);

  const addFiles = useCallback((files: File[]) => {
    const newUploads: UploadItem[] = files.map((file) => ({
      id: `upload-${++uploadIdCounter}`,
      fileName: file.name,
      sizeMB: 0,
      totalMB: file.size / (1024 * 1024),
      progress: 0,
      status: 'uploading' as const,
    }));

    setUploads((prev) => [...prev, ...newUploads]);

    // Simulate upload progress
    newUploads.forEach((upload) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setUploads((prev) =>
            prev.map((u) =>
              u.id === upload.id
                ? { ...u, progress: 100, sizeMB: u.totalMB, status: 'processing' }
                : u,
            ),
          );
          setTimeout(() => {
            setUploads((prev) =>
              prev.map((u) => (u.id === upload.id ? { ...u, status: 'done' } : u)),
            );
          }, 2000);
        } else {
          setUploads((prev) =>
            prev.map((u) =>
              u.id === upload.id
                ? { ...u, progress: Math.round(progress), sizeMB: (u.totalMB * progress) / 100 }
                : u,
            ),
          );
        }
      }, 300);
    });
  }, []);

  const cancelUpload = useCallback((id: string) => {
    setUploads((prev) => prev.filter((u) => u.id !== id));
  }, []);

  const activeUploads = uploads.filter((u) => u.status !== 'done');

  return { uploads: activeUploads, addFiles, cancelUpload };
}
