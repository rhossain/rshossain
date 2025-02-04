import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Project {
    _id: String,
    name: String,
    shortDescription?: PortableTextBlock[],
    longDescription: String,
    website: String,
    client: String,
    year: String,
    duration: String,
    category: String,
    technologies: [],
    featuredImage: SanityImageSource,
    gallery: []
}

export interface Post {
  _id: String,
    name: String,
    slug: {
      current: string;
    };
    eventType: String
    image: SanityImageSource;
  // _id: string;
  // title: string;
  // excerpt?: string;
  // slug: {
  //   current: string;
  // };
  // mainImage?: SanityImageSource;
  // body?: PortableTextBlock[];
}