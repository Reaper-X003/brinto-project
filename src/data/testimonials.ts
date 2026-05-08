import testimonial1 from '../assets/testimonials/testimonial1.jpg';
import testimonial2 from '../assets/testimonials/testimonial2.jpg';
import testimonial3 from '../assets/testimonials/testimonial3.jpg';

import achievement1 from '../assets/achievements/achievement1.jpg';
import achievement2 from '../assets/achievements/achievement2.jpg';
import achievement3 from '../assets/achievements/achievement3.jpg';

import certificate1 from '../assets/certificates/certificate1.jpg';
import certificate2 from '../assets/certificates/certificate2.jpg';
import certificate3 from '../assets/certificates/certificate3.jpg';

export type RecognitionType = 'testimonial' | 'certificate' | 'achievement' | 'collaboration';

export interface RecognitionData {
  id: string;
  title: string;
  organization: string;
  category: string;
  year: string;
  image: string;
  description: string;
  type: RecognitionType;
}

export const recognitionsData: RecognitionData[] = [
  {
    id: 'ach-1',
    title: 'Best Cinematic Portraiture',
    organization: 'Global Photography Awards',
    category: 'Event Recognition',
    year: '2025',
    image: achievement1,
    description: 'Awarded for exceptional storytelling and cinematic lighting techniques in portrait photography, standing out among 10,000+ entries worldwide.',
    type: 'achievement'
  },
  {
    id: 'test-1',
    title: 'A Visionary Artist',
    organization: 'Vogue Creatives',
    category: 'Client Review',
    year: '2024',
    image: testimonial1,
    description: '"Working with Brinto was an absolute dream. The attention to detail and the sheer cinematic quality of the final shots elevated our entire campaign."',
    type: 'testimonial'
  },
  {
    id: 'cert-1',
    title: 'Masterclass in Color Grading',
    organization: 'Academy of Fine Arts',
    category: 'Certificate',
    year: '2023',
    image: certificate1,
    description: 'Advanced certification in cinematic color grading and atmospheric lighting design for high-end fashion and editorial shoots.',
    type: 'certificate'
  },
  {
    id: 'collab-1',
    title: 'Editorial Campaign',
    organization: 'Saint Laurent Paris',
    category: 'Collaboration',
    year: '2024',
    image: achievement2,
    description: 'Featured lead photographer for the Autumn/Winter capsule collection, capturing the raw, moody essence of the brand.',
    type: 'collaboration'
  },
  {
    id: 'test-2',
    title: 'Unmatched Professionalism',
    organization: 'Elevate Magazine',
    category: 'Client Review',
    year: '2024',
    image: testimonial2,
    description: '"Brinto\'s ability to command a set while making the subjects feel completely at ease is a rare talent. The results always exceed expectations."',
    type: 'testimonial'
  },
  {
    id: 'cert-2',
    title: 'Excellence in Visual Arts',
    organization: 'National Creators Guild',
    category: 'Appreciation',
    year: '2023',
    image: certificate2,
    description: 'Honored for continuous contribution to the visual arts community and setting a benchmark for aspiring photographers.',
    type: 'certificate'
  },
  {
    id: 'ach-2',
    title: 'Top 30 Under 30 Creatives',
    organization: 'Art & Design Weekly',
    category: 'Event Recognition',
    year: '2022',
    image: achievement3,
    description: 'Recognized as one of the most influential young visual artists pushing the boundaries of contemporary photography.',
    type: 'achievement'
  },
  {
    id: 'test-3',
    title: 'Pure Cinematic Magic',
    organization: 'Netflix Productions',
    category: 'Client Review',
    year: '2025',
    image: testimonial3,
    description: '"The promotional stills delivered were exactly what we needed to set the dark, gritty tone of the series. Outstanding work."',
    type: 'testimonial'
  },
  {
    id: 'cert-3',
    title: 'Certified Lighting Technician',
    organization: 'International Guild of Cinematographers',
    category: 'Certificate',
    year: '2021',
    image: certificate3,
    description: 'Extensive training and certification in utilizing advanced studio and on-location lighting setups for dramatic effect.',
    type: 'certificate'
  }
];
