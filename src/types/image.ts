export interface ImageMetadata {
  id: string;
  catalogueId: string;
  userId: string;
  originalUrl: string;
  thumbnail: string;
  fileName: string;
  fileSize: string;
  mimeType: string;
  createdAt: Date;
}

export interface UploadResponse {
  success: boolean;
  image: {
    id: string;
    originalUrl: string;
    thumbnail: string;
    fileName: string;
  };
}

export interface ImagesListResponse {
  images: ImageMetadata[];
  nextCursor: string | null;
}
