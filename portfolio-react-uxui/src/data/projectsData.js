// CDN URLs from Cloudinary
const CLOUDINARY_URL = 'https://res.cloudinary.com/dl1m5dwmb/image/upload/v1768671127'

// Project data
export const projectsData = [
  {
    id: 1,
    title: 'UniQ',
    year: '2025',
    image: `${CLOUDINARY_URL}/1_krv2cm.webp`,
    description: 'A modern university management system designed to streamline student and faculty interactions.',
    role: 'UX/UI Designer (Internship)',
    duration: '4 months',
    tools: 'Figma',
    category: 'Mobile Application',
    additionalImages: [
      `${CLOUDINARY_URL}/1_krv2cm.webp`,
    ]
  },
  {
    id: 2,
    title: 'Peep Share',
    year: '2025',
    image: `${CLOUDINARY_URL}/1_krv2cm.webp`,
    description: 'Social sharing platform with focus on privacy and user control.',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: 'Figma, Sketch, InVision',
    category: 'Mobile App Design',
    additionalImages: []
  },
  {
    id: 3,
    title: 'Rapid Work',
    year: '2025',
    image: `${CLOUDINARY_URL}/1_krv2cm.webp`,
    description: 'Productivity tool for remote teams to collaborate efficiently.',
    role: 'UX/UI Designer',
    duration: '4 months',
    tools: 'Figma, Adobe XD, Figjam',
    category: 'Dashboard Design',
    additionalImages: []
  },
]
