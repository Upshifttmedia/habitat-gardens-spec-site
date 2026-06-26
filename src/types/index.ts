export interface Project {
  slug: string;
  name: string;
  location: string;
  year?: number;
  description: string;
  image: string;
  challenge?: string;
  approach?: string;
  narrative?: string;
  keystonePlants?: { name: string; description: string }[];
  nextSlug?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}
