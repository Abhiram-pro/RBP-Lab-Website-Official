export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Intrinsic dimensions are recorded so each frame reserves the right box
    before the image loads and nothing shifts on arrival. */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-01',
    src: '/images/gallery/gallery-01.jpg',
    width: 5568,
    height: 3712,
    alt: 'Photograph 1 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-02',
    src: '/images/gallery/gallery-02.jpg',
    width: 4032,
    height: 3024,
    alt: 'Photograph 2 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-03',
    src: '/images/gallery/gallery-03.jpg',
    width: 4032,
    height: 3024,
    alt: 'Photograph 3 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-04',
    src: '/images/gallery/gallery-04.jpg',
    width: 4032,
    height: 3024,
    alt: 'Photograph 4 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-05',
    src: '/images/gallery/gallery-05.jpg',
    width: 1152,
    height: 864,
    alt: 'Photograph 5 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-06',
    src: '/images/gallery/gallery-06.jpg',
    width: 1152,
    height: 864,
    alt: 'Photograph 6 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-07',
    src: '/images/gallery/gallery-07.jpg',
    width: 1152,
    height: 864,
    alt: 'Photograph 7 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-08',
    src: '/images/gallery/gallery-08.jpg',
    width: 4032,
    height: 3024,
    alt: 'Photograph 8 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-09',
    src: '/images/gallery/gallery-09.jpg',
    width: 1600,
    height: 1200,
    alt: 'Photograph 9 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-10',
    src: '/images/gallery/gallery-10.jpg',
    width: 1600,
    height: 1200,
    alt: 'Photograph 10 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-11',
    src: '/images/gallery/gallery-11.jpg',
    width: 1280,
    height: 960,
    alt: 'Photograph 11 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
  {
    id: 'gallery-12',
    src: '/images/gallery/gallery-12.jpg',
    width: 4032,
    height: 3024,
    alt: 'Photograph 12 from the RNA-Binding Proteins Laboratory at IIT Guwahati',
  },
];

/** Shape returned by the GROQ query in GALLERY_QUERY. */
export interface SanityGalleryDoc {
  _id: string;
  caption?: string;
  alt?: string;
  imageUrl?: string;
  width?: number;
  height?: number;
}

export const GALLERY_QUERY = `*[_type == "galleryImage" && defined(image.asset)] | order(takenAt desc){
  _id, caption,
  "alt": image.alt,
  "imageUrl": image.asset->url,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height
}`;

/**
 * Maps Studio documents onto the gallery shape. Sanity reports intrinsic
 * dimensions in asset metadata, which the grid needs up front to reserve each
 * frame; without them the layout shifts as images arrive.
 */
export function mapGalleryDocs(docs: SanityGalleryDoc[]): GalleryImage[] {
  return docs
    .filter((doc) => doc.imageUrl)
    .map((doc) => ({
      id: doc._id,
      src: doc.imageUrl as string,
      width: doc.width ?? 1600,
      height: doc.height ?? 1067,
      alt: doc.alt ?? doc.caption ?? 'Laboratory photograph',
    }));
}
