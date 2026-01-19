export interface ProjectTestimonial {
  testimonialText: string;
  testimonialName: string;
  testimonialOrganization: string;
}

export interface Project {
  slug: string;
  projectTitle: string;
  projectSubheading: string;
  projectCoverImage: string;
  projectYear: string;
  projectDomain: string;
  projectParagraphs: string[];
  projectTestimonials: ProjectTestimonial[];
  projectImages: string[];
  projectMobileViewImage: string;
  projectDesktopViewImage: string;
  projectWebsite: string;
}

export const projects: Project[] = [
  {
    slug: 'saunic',
    projectTitle: 'Saunic',
    projectSubheading: 'Backyard sauna pod',
    projectCoverImage: 'https://placehold.co/1200x675',
    projectYear: '2022',
    projectDomain: 'Industrial Design',
    projectParagraphs: [
      "Saunic has become synonymous with wellness and innovation, and the Backyard Sauna Pod stands as a pioneering product that redefines outdoor relaxation. This elegant design offers a luxurious private retreat experience, combining sophisticated aesthetics with cutting-edge functionality. The pod's commitment to quality and sustainability is evident in its responsibly sourced materials and energy-efficient heating systems. With intuitive design features such as adjustable temperature settings, ambient lighting, and integrated sound systems, Saunic caters to health-conscious consumers seeking to enhance their wellness lifestyle. The Backyard Sauna Pod has set a new benchmark for outdoor wellness solutions.",
      "The success of Saunic can be attributed to its innovative approach and dedication to excellence, which is reflected in the brand's rapid market penetration and customer satisfaction. The company has garnered acclaim for its ability to enhance the wellness lifestyle, with the pod being featured in numerous lifestyle publications and receiving positive reviews for its design, functionality, and health benefits. Saunic's plans to expand its product line and reach new markets are built on a foundation of quality and innovation."
    ],
    projectTestimonials: [
      {
        testimonialText: "Working with such a talented designer has been an absolute game-changer for Saunic. Your visionary design work not only encapsulated the essence of our brand but also elevated the Backyard Sauna Pod to an art form. Your ability to merge aesthetics with functionality has significantly contributed to our product's success in the market. On behalf of the entire Saunic team, I extend our heartfelt gratitude and look forward to continuing this fruitful collaboration.",
        testimonialName: 'Jonathan Jones',
        testimonialOrganization: 'Saunic'
      }
    ],
    projectImages: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
      'https://placehold.co/1200x675'
    ],
    projectMobileViewImage: 'https://placehold.co/375x812',
    projectDesktopViewImage: 'https://placehold.co/1920x1080',
    projectWebsite: 'https://saunic.com'
  },
  {
    slug: 'radiant-superfoods',
    projectTitle: 'Radiant Superfoods',
    projectSubheading: 'Next-generation health',
    projectCoverImage: '/images/radiant-superfoods.jpg',
    projectYear: '2023',
    projectDomain: 'Brand Design',
    projectParagraphs: [
      'Add your project description here...'
    ],
    projectTestimonials: [],
    projectImages: [],
    projectMobileViewImage: '',
    projectDesktopViewImage: '',
    projectWebsite: ''
  },
  {
    slug: 'lux-portals',
    projectTitle: 'Lux Portals',
    projectSubheading: 'Instantaneous travel',
    projectCoverImage: '/images/lux-portals.jpg',
    projectYear: '2023',
    projectDomain: 'Product Design',
    projectParagraphs: [
      'Add your project description here...'
    ],
    projectTestimonials: [],
    projectImages: [],
    projectMobileViewImage: '',
    projectDesktopViewImage: '',
    projectWebsite: ''
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
