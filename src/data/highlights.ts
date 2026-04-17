export type HighlightCard = {
  title: string;
  label: 'Competition' | 'Presentation';
  description: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent';
};

export type GalleryImage = {
  src: string;
  alt: string;
};

const mediaBase = '/for_portfolio';

export const highlightStats = [
  { value: '3', label: 'COMPETITIONS WON' },
  { value: '2', label: 'WORKSHOPS' },
  { value: '1', label: 'BACKEND WORKSHOP VIDEO' },
];

export const highlightCards: HighlightCard[] = [
  {
    title: 'Competition Win 1',
    label: 'Competition',
    description: 'A competition milestone earned through problem solving, execution, and presenting work under pressure.',
    image: `${mediaBase}/win_competion1.jpg`,
    color: 'accent',
  },
  {
    title: 'Competition Win 2',
    label: 'Competition',
    description: 'Recognition from building practical solutions and defending the work clearly.',
    image: `${mediaBase}/win_competition2.JPG`,
    color: 'accent',
  },
  {
    title: 'Problem Solving Competition Win',
    label: 'Competition',
    description: 'A problem-solving competition win built on algorithmic thinking, LeetCode practice, and competitive programming preparation.',
    image: `${mediaBase}/win_competiton3.jfif`,
    color: 'accent',
  },
  {
    title: 'Backend Workshop Presentation',
    label: 'Presentation',
    description: 'A backend-focused workshop covering practical engineering ideas, demos, and lessons from real projects.',
    image: `${mediaBase}/workshop_backend1.jfif`,
    color: 'primary',
  },
  {
    title: 'Problem Solving Workshop',
    label: 'Presentation',
    description: 'A LeetCode and problem-solving workshop focused on patterns, practice strategy, and competitive programming thinking.',
    image: `${mediaBase}/workshopPS1.jfif`,
    color: 'secondary',
  },
];

export const highlightGallery: GalleryImage[] = [
  { src: `${mediaBase}/workshop_backend2.jfif`, alt: 'Backend workshop presentation moment' },
  { src: `${mediaBase}/workshop_backend3.jfif`, alt: 'Backend workshop audience session' },
  { src: `${mediaBase}/workshopPS2.jfif`, alt: 'Problem solving workshop audience session' },
  { src: `${mediaBase}/DSC05578.jpg`, alt: 'Competition and presentation moment' },
];

export const highlightVideo = `${mediaBase}/workshop_backend_vid.mp4`;
