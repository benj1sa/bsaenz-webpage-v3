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
    slug: 'the-difference-between-moving-and-becoming',
    title: 'The Difference Between Moving and Becoming',
    category: 'Lifestyle',
    date: 'January 10, 2026',
    coverImage: '/images/the-difference-between-moving-and-becoming.png',
    introParagraph: 'Our culture defines success linearly.',
    sections: [
      {
        paragraphs: [
          'Most people optimize for progress instead of alignment. Promotions, GPA, titles, and milestones create movement without meaning.',
          'Get good grades → Find a good job → Get promoted → Retire',
          'What\'s strange is how often people follow this path perfectly and still wake up feeling disconnected from their own lives. We call it a midlife crisis, as if the problem appeared suddenly, rather than accumulating quietly for decades. How many of us can confidently say we navigate life with intention?',
          'Alignment is the default state when friction is removed.\nSuppression is the engineered state that requires constant maintenance.',
          'We\'re told to solve this by "finding our passion" or "doing what we\'re good at." but most people never meaningfully do either. Our system rewards predictability, not exploration. Deviating from the script feels risky, inefficient, and irresponsible.',
          'Suppressing the part of yourself that wants meaning takes effort. Over time, that effort shows up as numbness, burnout, or quiet resentment.',
          'Meaning isn\'t assigned. It\'s discovered.',
          'Not through grand life plans, but through small experiments.'
        ]
      },
      {
        paragraphs: [
          'Instead of optimizing for a destination, what if we treated life as a series of small experiments? Each experience becomes a data point. Not "did i advance," but "did this bring me closer to what feels true."',
          'Borrowing from Anne-Laure Le Cunff\'s work on Tiny Experiments, this way of living rests on a few operating principles.',
          'A commitment to curiosity keeps the system alive. Curiosity is how new options enter your world.',
          'Mindful productivity prevents sunk-cost loyalty. Quitting something that no longer fits isn\'t failure, it\'s signal detection.',
          'Collaboration with uncertainty builds trust in motion instead of certainty. Clarity emerges from movement, not from waiting.',
          'Tiny experiments aren\'t trivial. They\'re how autonomy re-enters a life that\'s been over-optimized. Small acts of curiosity compound into new internal maps. Growth happens when your inner model of yourself updates faster than your external labels.',
          'The metric shifts from achievement to learning. From status to signal. From accumulation to coherence.'
        ]
      },
      {
        paragraphs: [
          'We often mistake endurance for strength. We ignore the signals that something might not actually be for us. We push through some resistance expecting victory on the other side. Negative emotions signaling us to stop, but we suppress them in the name of discipline.',
          'Suppression requires constant maintenance. It leaks through fatigue, irritability, numbness, and quiet resentment. You can hold it for a while, but the nervous system keeps a ledger. It must show up, there is no stable equilibrium under suppression.',
          'When effort is misaligned with duty, endurance becomes a slow form of self-erasure. Eventually the emotional debt comes due.',
          'Alignment feels quieter than ambition, but deeper than motivation. It feels like moving with yourself instead of against yourself.',
          'Success becomes less about where you end up, and more about whether you recognize yourself along the way.',
          'Start small. Follow one signal. Run one experiment. Let alignment prove itself.'
        ]
      }
    ],
    socialLinks: {
      substack: 'https://bsaenz.substack.com/p/the-difference-between-moving-and'
    }
  },
  {
    slug: 'writing-to-reclaim-independent-thought',
    title: 'Writing To Reclaim Independent Thought',
    category: 'Lifestyle',
    date: 'January 10, 2026',
    coverImage: '/images/writing-to-reclaim-independent-thought.png',
    introParagraph: 'So many of us today have subjected ourselves to constant feeds of information, notifications, and autoplay. We are slowly losing the ability to think for ourselves. Instead of the intentional consumption of content, we have opted for a hyper-personalized buffet that quietly rewires how we notice, choose, and remember.',
    sections: [
      {
        paragraphs: [
          'I wasn\'t the best writing student in grade school. Recently, I\'ve felt like I\'ve lost my opinions to social media. I\'ve spent hours scrolling on YouTube, without spending the warranted time forming proper opinion on them. I catch myself reaching for summaries before struggling with the ideas myself. I have spent too long consuming without digesting. Too long reacting without choosing. As I sit down to write this, I notice how fragmented my thought process is. An emotion here, a thought there. I believe the quality of our thinking is deeply tied to how well we write.',
          'With the advent of artificial intelligence, more people are offloading an increasing variety of cognitive tasks to LLMs. In tandem to this, there is an increasing pressure to optimize and deliver results fast. In the speed, we lose our depth, intentionality, and autonomy. We lose the capacity to form hypotheses and glean the meaning of content within the context of our own experiences and bring a new idea into the world. Together, they quietly erode our agency as thinkers.',
          'Writing may be the thing that shields me from this. It\'s a practice that rewards coherence, novelty, authenticity, and the courage to hold an opinion. So often as an engineer I tend towards optimization. I would like to lean into meaning.',
          'What about the plot of Dune 2 had me sitting on the edge of my seat, anxious about the timing of my restroom visit? Why do I feel a sense of dread for the next generation in the midst of AI? What does ethical AI behavior look like? Who gets to decide? I don\'t actually know why I love certain stories. That bothers me.',
          'I want this blog to be the place where I interrogate the opinions I\'ve protected but never tested. I want to exercise my writing and honor my interests by giving them a proper medium. I want it to be the place where I am proven wrong. If I have given myself confidence in my opinions, knowledge, way of living, and values, this blog will have been a success.'
        ]
      }
    ],
    socialLinks: {
      substack: 'https://bsaenz.substack.com/p/writing-to-reclaim-independent-thought'
    }
  },
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
