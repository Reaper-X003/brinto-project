import { Heart, Camera, UserSquare2, Briefcase, CalendarHeart, Users } from 'lucide-react';

export const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Emotional and cinematic coverage for engagement, mehendi, wedding, and reception events. Capturing the real moments and grand celebrations.',
    icon: Heart
  },
  {
    id: 'event',
    title: 'Event Coverage',
    description: 'Professional documentation for corporate summits, cultural festivals, educational seminars, and social events.',
    icon: CalendarHeart
  },
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    description: 'Personal, lifestyle, studio, and professional portrait photography tailored to your unique personality and brand.',
    icon: UserSquare2
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'High-end product, restaurant, brand, and campaign photography designed to elevate your business presence.',
    icon: Briefcase
  },
  {
    id: 'cultural',
    title: 'Cultural Documentation',
    description: 'Preserving the essence of cultural heritage, theater performances, and traditional gatherings with an authentic eye.',
    icon: Users
  },
  {
    id: 'editorial',
    title: 'Editorial & Fashion',
    description: 'Creative and conceptual photoshoots for fashion brands, magazines, and editorial storytelling.',
    icon: Camera
  }
];
