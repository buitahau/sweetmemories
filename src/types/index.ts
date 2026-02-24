export interface Category {
  id: string;
  name: string;
  photoCount: number;
  coverImage: string;
  updatedAt: string;
  badge?: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  isPopular?: boolean;
  isSelected?: boolean;
}

export interface UploadItem {
  id: string;
  fileName: string;
  sizeMB: number;
  totalMB: number;
  progress: number;
  status: 'uploading' | 'processing' | 'done';
}

export interface Settings {
  siteTitle: string;
  description: string;
  subdomain: string;
  isPublic: boolean;
  hideFromSearch: boolean;
}

export interface TemplateConfig {
  selectedTemplate: string;
  isPublished: boolean;
  heroImageId: string;
  description: string;
  selectedCategories: string[];
}

export interface User {
  name: string;
  role: string;
  avatar?: string;
}

export interface DashboardStats {
  totalPhotos: number;
  lastUpdateRelative: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface BookChapterItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
}

export interface BookChapterData {
  id: string;
  chapterNumber: string;
  title: string;
  date: string;
  items: BookChapterItem[];
  layout: 'featured-grid' | 'photo-strip' | 'quote-video';
  quote?: string;
  videoThumbnail?: string;
}

export interface PublicBook {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introText: string;
  heartCount: number;
  tabs: string[];
  chapters: BookChapterData[];
}
