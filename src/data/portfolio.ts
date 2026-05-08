import { images } from './images';

export interface Project {
  id: string;
  title: string;
  category: 'Wedding' | 'Event' | 'Cultural' | 'Portrait' | 'Social Works';
  location: string;
  date: string;
  description: string;
  coverImage: string;
  gallery: string[];
}

export const portfolioData: Project[] = [
  {
    id: 'wedding-story',
    title: 'Wedding Story',
    category: 'Wedding',
    location: 'Dhaka, Bangladesh',
    date: '2024',
    description: 'Beautiful traditional wedding capturing the essence of cultural heritage.',
    coverImage: images.featured[0],
    gallery: images.portfolio.wedding
  },
  {
    id: 'corporate-event',
    title: 'Event Coverage',
    category: 'Event',
    location: 'BICC, Dhaka',
    date: '2024',
    description: 'Extensive documentation of a multi-day event.',
    coverImage: images.featured[1],
    gallery: images.portfolio.event
  },
  {
    id: 'cultural-night',
    title: 'Cultural Night',
    category: 'Cultural',
    location: 'Shilpakala Academy',
    date: '2024',
    description: 'Vibrant captures from the cultural night highlighting traditional dance and music.',
    coverImage: images.featured[2],
    gallery: images.portfolio.cultural
  },
  {
    id: 'portrait-session',
    title: 'Portrait Sessions',
    category: 'Portrait',
    location: 'Studio',
    date: '2024',
    description: 'High-end portrait session focusing on dramatic lighting, texture, and expression.',
    coverImage: images.portfolio.portrait[0],
    gallery: images.portfolio.portrait
  },
  {
    id: 'social-works',
    title: 'Social Works',
    category: 'Social Works',
    location: 'Bangladesh',
    date: '2024',
    description: 'Documenting social activities and community work across Bangladesh.',
    coverImage: images.portfolio.socialWorks[0],
    gallery: images.portfolio.socialWorks
  }
];

export const categories = ['All', 'Wedding', 'Event', 'Cultural', 'Portrait', 'Social Works'];
