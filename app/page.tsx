import { Footer, Navigation, WritingPost, WorkPost, SubscriptionBox } from "@/components/ui";
import { getAllPosts } from "@/data/posts";
import { projects } from "@/data/projects";
import Link from "next/link";

const links = [
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
]

// Get the two most recent projects
const recentWork = projects.slice(0, 2).map(project => ({
  title: project.projectTitle,
  description: project.projectSubheading,
  image: project.projectCoverImage,
  slug: project.slug,
}));

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
              building <span className="italic bg-yellow-100 px-1 rounded-md">autonomous robotics systems</span> and <span className="italic bg-yellow-100 px-1 rounded-md">astrophysics simulations</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my past <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              optimized underwater robotic <span className="italic bg-yellow-100 px-1 rounded-md">propulsion by 48%</span> using Bayesian optimization, achieved <span className="italic bg-yellow-100 px-1 rounded-md">100% student satisfaction</span> as a STEM tutor, and presented research to <span className="italic bg-yellow-100 px-1 rounded-md">100+ attendees</span> at the FIRE conference.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my future <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              make a lot of <span className="italic bg-yellow-100 px-1 rounded-md">friends</span>, and help a lot more people. continue building <span className="italic bg-yellow-100 px-1 rounded-md">technology that improves lives</span> through curiosity and innovation.
            </p>
          </div>
        </section>
        
        <div className="border-t border-gray-200 my-8"></div>

        {/* Latest Post Section */}
        {(() => {
          const allPosts = getAllPosts();
          const latestPost = allPosts.length > 0 ? allPosts[0] : null;
          return (
            latestPost && (
              <section className="group cursor-pointer">
                <div className="text-xs font-medium uppercase tracking-wider text-[#757575] mb-3 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
                  Latest Post
                </div>
                <WritingPost 
                  title={latestPost.title} 
                  date={(() => {
                    const date = new Date(latestPost.date);
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const year = date.getFullYear().toString().slice(-2);
                    return `${month}/${day}/${year}`;
                  })()}
                  image={latestPost.coverImage} 
                  slug={latestPost.slug}
                />
              </section>
            )
          );
        })()}

        <div className="border-t border-gray-200 my-8"></div>

        {/* Recent Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Recent Work
          </h2>
          <div className="space-y-12">
            {recentWork.map((work) => (
              <WorkPost key={work.title} title={work.title} description={work.description} image={work.image} slug={work.slug} />
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
        {(() => {
          const allPosts = getAllPosts();
          const archivePosts = allPosts.slice(1); // All posts except the latest one
          return archivePosts.length > 0 && (
            <section className="mb-16">
              <div className="text-xs uppercase tracking-wider text-[#757575] mb-6 font-medium font-(family-name:--font-inter)">
                Archive
              </div>
              <div className="space-y-4">
                {archivePosts.map((post) => (
                  <Link key={post.slug} href={`/writing/${post.slug}`}>
                    <article className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 group cursor-pointer">
                      <p className="font-medium text-medium md:text-large text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                        {post.title}
                      </p>
                      <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                        {post.date}
                      </time>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );   
}
