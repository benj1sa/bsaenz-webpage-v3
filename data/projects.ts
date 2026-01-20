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
    slug: 'umd-loop-mars-rover',
    projectTitle: 'UMD Loop Mars Rover Development',
    projectSubheading: 'Pioneering the next generation of Mars exploration through robotics and autonomous systems.',
    projectCoverImage: '/images/umd-loop.webp',
    projectYear: '2024',
    projectDomain: 'Robotics & Autonomous Systems',
    projectParagraphs: [
      "UMD Loop is a competitive engineering team participating in the University Rover Challenge (URC), an annual robotics competition where collegiate teams from around the world design and build Mars rovers. I'm working as an Integration Sub-Team Member, focusing on ensuring seamless communication and functionality across all rover systems.",
      "My key contributions include researching and implementing epipolar geometry, stereo camera calibration, and depth estimation to enable precise autonomous movement and obstacle avoidance. I also facilitate CAN protocol-based communication for motor controls and sensor data integration, ensuring real-time responsiveness across the rover. Additionally, I apply advanced computer vision techniques such as Scale-Invariant Feature Transform (SIFT) and disparity mapping for 3D scene reconstruction and stereo vision.",
      "This project is contributing to the broader mission of advancing planetary exploration through hands-on experience in system integration, robotics software development, and cutting-edge computer vision techniques."
    ],
    projectTestimonials: [],
    projectImages: [
      '/images/umd-loop.webp',
      '/images/umd-loop-2.png',
      '/images/umd-loop-3.png'
    ],
    projectMobileViewImage: '',
    projectDesktopViewImage: '',
    projectWebsite: 'https://www.umdloop.com/'
  },
  {
    slug: 'aether-gravitational-lensing',
    projectTitle: 'Aether Gravitational Lensing',
    projectSubheading: 'Unveiling the Origins of the Universe with Cutting-Edge Simulations.',
    projectCoverImage: '/images/aether-astra.png',
    projectYear: '2024',
    projectDomain: 'ComputationalAstrophysics',
    projectParagraphs: [
      "Aether Gravitational Lensing is a groundbreaking project aimed at uncovering the mysteries behind the formation of the first stars and galaxies in the universe using supercomputers and James Webb Space Telescope (JWST) capabilities.",
      "The project's objectives include simulating the universe's earliest star clusters and galaxies, replicating gravitational lensing phenomena observed by JWST, and creating open-source tools for the global astronomy community. By making tools publicly available, we support scientists, space agencies, and students in advancing understanding of the universe's origins.",
      "This work advances astronomy by providing deeper insights into galaxy formation and answers questions about the early universe. It also supports the broader astronomy community in advancing research on cosmic evolution and serves as a model for scientific inquiry and collaborative high-tech projects in astrophysics."
    ],
    projectTestimonials: [],
    projectImages: [
      '/images/aether-astra.png',
      '/images/aether-astra-2.png',
      '/images/aether-astra-3.png'
    ],
    projectMobileViewImage: '',
    projectDesktopViewImage: '/images/aether-astra.png',
    projectWebsite: 'https://aetherumd.github.io/aether-astra/'
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
