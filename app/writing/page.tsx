import { Footer, Navigation, WritingPost, SubscriptionBox } from "@/components/ui";
import { getAllPosts } from "@/data/posts";
import Link from "next/link";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

// Helper function to format date for display (converts "February 20, 2024" to "2/20/24")
function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
}

export default function Writing() {
  const allPosts = getAllPosts();
  // Sort by date (newest first) - you might want to add a date field for sorting
  const recentPosts = allPosts.slice(0, 3); // Show first 3 as recent
  const archivePosts = allPosts.slice(3); // Rest go to archive

  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Writing Section */}
        <section className="mb-16 mt-26 space-y-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
              Writing
            </h1>
            {/* <h2 className="text-4xl md:text-5xl text-[#a6a6a6] font-extralight italic tracking-[-0.07em] font-(family-name:--font-crimson-pro)">
              Online Exploration
            </h2> */}
          </div>
          {/* <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
            Join me as I explore the delicate tapestry of habits that embroider our being. My writings are lanterns in the vastness of existence, illuminating the subtle dance of incremental change and its capacity to shape our destinies. In the minutiae lies the monumental, and we're all invited to discover the poetry of productivity and the art of mindful living.
          </p>
          <SubscriptionBox /> */}
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <section className="mb-16">
            <div className="text-xs font-medium uppercase tracking-wider text-[#757575] mb-6 font-(family-name:--font-inter)">
              Recent Posts
            </div>
            <div className="flex flex-col space-y-12">
              {recentPosts.map((post) => (
                <WritingPost 
                  key={post.slug} 
                  title={post.title} 
                  date={formatDateShort(post.date)} 
                  image={post.coverImage}
                  slug={post.slug}
                />
              ))}
            </div>
          </section>
        )}

        {archivePosts.length > 0 && (
          <>
            <div className="border-t border-gray-200 my-8"></div>

            {/* Archive Section */}
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
          </>
        )}

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}