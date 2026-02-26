export interface NavigationItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  type: string;
  image?: string;
  imageSecondary?: string;
  trailer?: string;
  trailerSecondary?: string;
  description: string;
  awards?: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PresenterShow {
  id: string;
  title: string;
  description: string;
  image?: string;
  thumbnail?: string;
  avatar?: string;
}
