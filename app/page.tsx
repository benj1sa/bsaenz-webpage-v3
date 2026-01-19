import { Footer, Navigation, WritingPost, WorkPost, SubscriptionBox } from "@/components/ui";

const links = [
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
]

const recentWork = [
  {
    title: 'Radiant Superfoods',
    description: 'Next-generation health',
    image: '/images/radiant-superfoods.jpg',
  },
  {
    title: 'Lux Portals',
    description: 'Instantaneous travel',
    image: '/images/lux-portals.jpg',
  },
]

const archive = [
    {
        title: 'The Landscape of Online Livelihoods',
        date: 'February 29, 2024',
    },
    {
        title: "Birth of Today's Digital Ecosystem",
        date: 'March 1, 2024',
    },
    {
        title: 'The Dynamic Future of Online Engagement',
        date: 'March 2, 2024',
    },
]

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Welcome Section */}
        <section className="mb-16 mt-26 space-y-6">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Welcome!
          </h1>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my present <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              building products and <span className="italic bg-yellow-100 px-1 rounded-md">writing daily</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my past <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              scaled a <span className="italic bg-yellow-100 px-1 rounded-md">health tech startup</span> from $0 to $10m arr in 8 months, reformed provincial education policy on <span className="italic bg-yellow-100 px-1 rounded-md">tech requirements for 300,000+ students</span>, and summitted <span className="italic bg-yellow-100 px-1 rounded-md">mt. kilimanjaro</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my future <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              make a lot of <span className="italic bg-yellow-100 px-1 rounded-md">friends</span>, and help a lot more people. summiting mt. everest could also be cool. :)
            </p>
          </div>
        </section>
        
        <div className="border-t border-gray-200 my-8"></div>

        {/* Latest Post Section */}
        <section className="group cursor-pointer">
          <div className="text-xs font-medium uppercase tracking-wider text-[#757575] mb-3 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
            Latest Post
          </div>
          <WritingPost title="The Evolution of Online Media" date="2/20/24" image="/images/evolution-of-online-media.jpg" />
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Recent Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Recent Work
          </h2>
          <div className="space-y-12">
            {recentWork.map((work) => (
              <WorkPost key={work.title} title={work.title} description={work.description} image={work.image} />
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Newsletter Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Newsletter
          </h2>
          <p className="text-base text-gray-900 leading-relaxed mb-6 font-(family-name:--font-inter)">
            Join 69,000 ambitious entrepreneurs in subscribing to my weekly newsletter, where I share actionable advice on how to become the best version of yourself and industry secrets to transform your life (and yo-yo tricks).
          </p>
          <SubscriptionBox />
          {/* <p className="text-sm font-light italic font-(family-name:--font-crimson-pro) text-gray-500">
            Join 69,000 inspired readers for my weekly newsletter.
          </p> */}
        </section>

        {/* Archive Section */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-[#757575] mb-6 font-medium font-(family-name:--font-inter)">
            Archive
          </div>
          <div className="space-y-4">
            {archive.map((post) => (
              <article key={post.title} className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 group cursor-pointer">
                <p className="font-medium text-medium md:text-large text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                  {post.title}
                </p>
                <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                  {post.date}
                </time>
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );   
}
