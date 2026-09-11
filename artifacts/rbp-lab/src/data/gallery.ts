export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 4 3%22%3E%3Crect width=%224%22 height=%223%22 fill=%22%23e7e5df%22/%3E%3C/svg%3E';

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'placeholder-gallery-01', src: PLACEHOLDER_IMAGE, width: 4, height: 3, alt: 'Placeholder gallery image one' },
  { id: 'placeholder-gallery-02', src: PLACEHOLDER_IMAGE, width: 3, height: 4, alt: 'Placeholder gallery image two' },
  { id: 'placeholder-gallery-03', src: PLACEHOLDER_IMAGE, width: 16, height: 9, alt: 'Placeholder gallery image three' },
  { id: 'placeholder-gallery-04', src: PLACEHOLDER_IMAGE, width: 4, height: 3, alt: 'Placeholder gallery image four' },
  { id: 'placeholder-gallery-05', src: PLACEHOLDER_IMAGE, width: 3, height: 4, alt: 'Placeholder gallery image five' },
  { id: 'placeholder-gallery-06', src: PLACEHOLDER_IMAGE, width: 16, height: 9, alt: 'Placeholder gallery image six' },
  { id: 'placeholder-gallery-07', src: PLACEHOLDER_IMAGE, width: 4, height: 3, alt: 'Placeholder gallery image seven' },
  { id: 'placeholder-gallery-08', src: PLACEHOLDER_IMAGE, width: 3, height: 4, alt: 'Placeholder gallery image eight' },
];