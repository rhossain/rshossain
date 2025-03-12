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
    gallery: [],
    priority: String
}

export interface Technology {
  _id: String,
  name: String,
  level: String,
  rating: String,
  yearOfExperience: String,
  icon: SanityImageSource,
  visibility: String
}

export interface Basic {
  _id: String,
  fName: String,
  lName: String,
  nickName: String,
  birthday: Date,
  email: String,
  phone: String,
  website: String,
  nationality: String,
  fullAddress?: PortableTextBlock[],
  shortAddress: String,
  designation: String,
  summary?: PortableTextBlock[],
  featuredHome: SanityImageSource,
  featuredAbout: SanityImageSource
}

export interface Experience {
  _id: String,
  company: String,
  companyWebsite: String,
  companyEmail: String,
  companyPhone: String,
  companyLogo: SanityImageSource,
  designation: String,
  startDate: Date,
  endDateOrNot: String,
  endDate: Date,
  responsibilities?: PortableTextBlock[]
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