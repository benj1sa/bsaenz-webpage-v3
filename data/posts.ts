export interface BlogQuote {
  quoteText: string;
  authorName: string;
  authorTitle: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  quote?: BlogQuote;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string; // Format: "February 20, 2024"
  coverImage: string;
  introParagraph: string;
  introParagraphAfterImage?: string; // Optional intro paragraph after the cover image
  sections: BlogSection[];
  socialLinks?: {
    substack?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export const posts: BlogPost[] = [
  {
    slug: 'the-evolution-of-online-media',
    title: 'The Evolution of Online Media',
    category: 'Minimalism',
    date: 'February 20, 2024',
    coverImage: '/images/evolution-of-online-media.jpg',
    introParagraph: 'The digital revolution has dramatically reshaped the realm of online media, transforming how we communicate, access information, and interact with the world. This swift evolution from simple web pages to complex, interactive platforms reflects a convergence of technological innovation & cultural shift.',
    introParagraphAfterImage: 'The digital age has ushered in a seismic shift in the landscape of online media, transforming it from a nascent network of simple web pages to a complex ecosystem of interactive platforms that shape our daily lives. This article explores the evolution of online media, highlighting the technological advancements, societal shifts, and the future trajectory of communication.',
    sections: [
      {
        heading: 'The Dawn of Digital Media',
        paragraphs: [
          'In the early 1990s, the internet was a fledgling network of text-based websites and forums. These platforms laid the groundwork for online communication, but were limited in scope and functionality.'
        ],
        quote: {
          quoteText: 'The internet started as a way to communicate academic information. It\'s fascinating to see how it has evolved into a vital part of our daily lives.',
          authorName: 'JOHN DOE',
          authorTitle: 'TECH HISTORIAN'
        }
      },
      {
        heading: 'The Rise of Web 2.0',
        paragraphs: [
          'The introduction of Web 2.0 marked a pivotal shift in online media. Platforms like MySpace, Facebook, and YouTube revolutionized how users interacted with content, introducing features that allowed for user-generated content, social networking, and multimedia sharing.'
        ]
      },
      {
        heading: 'The Age of Interaction and Engagement',
        paragraphs: [
          'Social media platforms became the new face of online media facilitating real-time communication, community building, and content creation on an unprecedented scale. The barrier between content creators and consumers dissolved, giving rise to influencers, vloggers, and citizen journalists who reshaped media consumption patterns.'
        ]
      }
    ],
    socialLinks: {
      substack: '#',
      linkedin: '#',
      facebook: '#'
    }
  },
  {
    slug: 'birth-of-todays-digital-ecosystem',
    title: 'Birth of Today\'s Digital Ecosystem',
    category: 'Lifestyle',
    date: 'March 1, 2024',
    coverImage: '/images/birth-of-digital-ecosystem.jpg',
    introParagraph: 'The internet\'s journey from a rudimentary network of simple web pages to today\'s intricate digital ecosystem is a testament to human ingenuity and the relentless pursuit of progress. This evolution has not only transformed how we access information and communicate but has also redefined our social, economic, and personal landscapes.',
    sections: [
      {
        heading: 'The Dawn of the Digital Age',
        paragraphs: [
          'In the late 20th century, the internet emerged as a network of computers designed to share information seamlessly across vast distances. The introduction of the World Wide Web in the early 1990s, with its web pages and hyperlinks, marked the beginning of the digital revolution.',
          'The subsequent development of web browsers made the internet more accessible, leading to an explosion of content and users. This era laid the groundwork for the digital world we know today.'
        ]
      },
      {
        heading: 'The Rise of Social Media and E-commerce',
        paragraphs: [
          'The early 2000s witnessed the rise of social media platforms and e-commerce websites, signaling a shift in how people connect and conduct business online. Platforms like MySpace, followed by Facebook and Twitter, revolutionized personal communication, transforming the internet into a space for social interaction and community building.',
          'Simultaneously, companies like Amazon and eBay were pioneering online retail, offering a new way to shop and ushering in the era of e-commerce.'
        ]
      },
      {
        heading: 'The Mobile Revolution',
        paragraphs: [
          'The introduction of smartphones and mobile applications in the late 2000s further accelerated the internet\'s evolution, making digital services and information accessible anytime, anywhere. This mobile wave gave birth to the app ecosystem, with millions of apps catering to every possible need and interest, from navigation and productivity to entertainment and fitness.'
        ]
      },
      {
        heading: 'The Age of Streaming and Cloud Computing',
        paragraphs: [
          'Today, we live in an age dominated by streaming services like Netflix and Spotify, and cloud computing platforms that offer on-demand access to computing resources and services.'
        ]
      },
      {
        heading: 'The Internet of Things (IoT)',
        paragraphs: [
          'The Internet of Things has connected everyday objects to the internet, making our homes, cars, and even cities smarter and more efficient.'
        ]
      },
      {
        heading: 'Challenges and Opportunities',
        paragraphs: [
          'As the digital ecosystem grows, so do concerns about privacy, security, and the ethical use of technology. Balancing innovation with these concerns is one of the key challenges of our time. Emerging technologies like 5G, artificial intelligence, and quantum computing promise to further transform the digital landscape, offering new opportunities for innovation and connection.'
        ],
        quote: {
          quoteText: 'The internet\'s evolution from simple web pages to the vast digital ecosystem we navigate today is a mirror reflecting our collective ambition, creativity, and challenges. It\'s a journey that underscores the power of connectivity to unlock human potential and reshape society.',
          authorName: 'Dr. Alex Rivera',
          authorTitle: 'Technology Historian'
        }
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'From its early days to today\'s digital ecosystem, the internet\'s evolution continues to shape our world in profound ways. As we look to the future, we are reminded of the internet\'s potential to foster connectivity, innovation, and transformation across all aspects of life.'
        ]
      }
    ],
    socialLinks: {
      substack: '#',
      linkedin: '#',
      facebook: '#'
    }
  },
  {
    slug: 'the-landscape-of-online-livelihoods',
    title: 'The Landscape of Online Livelihoods',
    category: 'Business',
    date: 'February 29, 2024',
    coverImage: '/images/landscape-of-online-livelihoods.jpg',
    introParagraph: 'In the fabric of the digital age, the concept of earning a living has been fundamentally transformed. The internet has become a fertile ground for diverse careers, from freelancing and digital entrepreneurship to content creation and remote work. This article explores the myriad ways individuals are navigating and thriving in the online economy.',
    sections: [
      {
        heading: 'The Rise of Remote Work',
        paragraphs: [
          'The global pandemic served as a catalyst for remote work, turning it from a niche option into a mainstream necessity almost overnight. Companies and employees alike discovered the benefits and challenges of working from home, leading to a reevaluation of traditional office structures.',
          'Many found that remote work offered a better work-life balance while maintaining or even increasing productivity. Businesses have access to a wider pool of talent, not limited by geographical boundaries.'
        ]
      },
      {
        heading: 'Challenges and Solutions',
        paragraphs: [
          'Despite its advantages, remote work also presents challenges such as isolation and the blurring of work-life boundaries. Solutions include digital coworking spaces, regular virtual team meetings, and setting clear work-from-home policies.'
        ]
      },
      {
        heading: 'The Gig Economy and Freelancing',
        paragraphs: [
          'Freelancing has exploded in popularity, with platforms like Upwork and Fiverr facilitating a connection between freelancers and clients in need of specific skills.',
          'From writing and graphic design to programming and digital marketing, freelancing offers a vast array of opportunities. Successful freelancers often emphasize the importance of building a strong online presence and personal brand.'
        ],
        quote: {
          quoteText: 'In the gig economy, your reputation is your most valuable asset.',
          authorName: 'Jane Doe',
          authorTitle: 'Freelance Graphic Designer'
        }
      },
      {
        heading: 'Entrepreneurship in the Digital Age',
        paragraphs: [
          'The internet has lowered the barriers to entry for starting a business, enabling entrepreneurs to launch startups with just a laptop and an idea.',
          'Companies like Dropbox and Slack began as small startups before becoming giants in the tech industry. Online stores on platforms like Shopify have enabled entrepreneurs to sell products worldwide without the need for physical premises.',
          'Standing out in a crowded online market can be challenging. While starting costs may be lower, scaling a business often requires significant investment.'
        ]
      },
      {
        heading: 'Content Creation: A New Frontier',
        paragraphs: [
          'Content creation has emerged as a viable career path, with platforms like YouTube, Twitch, and Patreon offering creators the chance to monetize their talents and passions.',
          'From gaming and tutorials to lifestyle vlogging, there are endless niches for content creators. Successful creators emphasize the importance of engaging with their audience and building a community.'
        ],
        quote: {
          quoteText: 'Content creation is about sharing your passion and connecting with like-minded individuals.',
          authorName: 'John Smith',
          authorTitle: 'YouTube Creator'
        }
      },
      {
        heading: 'The Future of Online Livelihoods',
        paragraphs: [
          'Emerging trends include artificial intelligence and automation, which are expected to create new job categories while transforming existing ones. Businesses and freelancers alike are increasingly focusing on sustainability and ethical practices.',
          'Adapting to change and continuous learning are key to thriving in the online economy. Skills in digital marketing, web development, and data analysis are becoming increasingly valuable.'
        ]
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The landscape of online livelihoods is vast and varied, offering unprecedented opportunities for those willing to navigate its challenges. As the digital world continues to evolve, so too will the ways in which we work, create, and connect.'
        ]
      }
    ],
    socialLinks: {
      substack: '#',
      linkedin: '#',
      facebook: '#'
    }
  }
];

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

// Helper function to get all post slugs
export function getAllPostSlugs(): string[] {
  return posts.map(post => post.slug);
}

// Helper function to get all posts (for listing page)
export function getAllPosts(): BlogPost[] {
  return posts;
}
