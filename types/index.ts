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
  /** Taller than it is wide. The slideshow shows these whole rather than
   *  cropping them to its 16:9 band. */
  upright?: boolean;
}
